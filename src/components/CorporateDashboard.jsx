import Navbar from "./Navbar";
import UnionCard from "./UnionCard";
import "../styles/UnionsDashboard.css";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./Loading";
import Companies from "./Companies";
import { corporateUnionsHandler, getCorporateUnionsData } from "../api/api.jsx";

export default function CorporateDashboard() {
  const [unions, setUnions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [stateFilter, setStateFilter] = useState("all");
  const [creditTypeFilter, setCreditTypeFilter] = useState("all");
  const [verificationFilter, setVerificationFilter] = useState("all");
  const [sortKey, setSortKey] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [subscriber, setSubscriber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const sessionId = localStorage.getItem("sessionId");

    if (!email || !sessionId) {
      navigate("/login");
      setLoading(false);
      return;
    }

    corporateUnionsHandler({}, setSubscriber);
  }, [navigate]);

  useEffect(() => {
    if (subscriber > 0) {
      const data = getCorporateUnionsData();
      if (data?.status && data.status !== 200) {
        if ([401, 403].includes(data.status)) {
          navigate("/login");
        }
        setUnions([]);
      } else {
        setUnions(Array.isArray(data) ? data : data?.unions || []);
      }
      setLoading(false);
    }
  }, [subscriber, navigate]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const stateOptions = useMemo(() => {
    return [...new Set(unions.map((union) => union.state).filter(Boolean))].sort();
  }, [unions]);

  const creditTypeOptions = useMemo(() => {
    return [...new Set(unions.map((union) => union.creditType).filter(Boolean))].sort();
  }, [unions]);

  const verificationOptions = useMemo(() => {
    return [...new Set(unions.map((union) => union.verificationStatus).filter(Boolean))].sort();
  }, [unions]);

  const filteredUnions = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return unions.filter((union) => {
      const matchesSearch = normalizedSearch
        ? union.unionName?.toLowerCase().includes(normalizedSearch)
        : true;
      const matchesState = stateFilter === "all" ? true : union.state === stateFilter;
      const matchesCreditType =
        creditTypeFilter === "all" ? true : union.creditType === creditTypeFilter;
      const matchesVerification =
        verificationFilter === "all"
          ? true
          : union.verificationStatus === verificationFilter;
      return matchesSearch && matchesState && matchesCreditType && matchesVerification;
    });
  }, [unions, searchTerm, stateFilter, creditTypeFilter, verificationFilter]);

  const sortedUnions = useMemo(() => {
    const list = [...filteredUnions];
    list.sort((a, b) => {
      switch (sortKey) {
        case "credits":
          return (a.creditsAvailableForSale ?? 0) - (b.creditsAvailableForSale ?? 0);
        case "minPrice":
          return (a.minPricePerCredit ?? 0) - (b.minPricePerCredit ?? 0);
        case "maxPrice":
          return (a.maxPricePerCredit ?? 0) - (b.maxPricePerCredit ?? 0);
        case "vintage":
          return (a.vintageYear ?? 0) - (b.vintageYear ?? 0);
        case "name":
        default:
          return (a.unionName ?? "").localeCompare(b.unionName ?? "");
      }
    });
    if (sortOrder === "desc") {
      list.reverse();
    }
    return list;
  }, [filteredUnions, sortKey, sortOrder]);

  if (loading) return <Loading data="Dashboard" />;

  return (
    <div>
      <Navbar />
      <div className="dashboard-filters">
        <div className="filter-group">
          <label htmlFor="union-search">Search</label>
          <input
            id="union-search"
            className="filter-input"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search union name"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="state-filter">State</label>
          <select
            id="state-filter"
            className="filter-input"
            value={stateFilter}
            onChange={(event) => setStateFilter(event.target.value)}
          >
            <option value="all">All states</option>
            {stateOptions.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="credit-filter">Credit type</label>
          <select
            id="credit-filter"
            className="filter-input"
            value={creditTypeFilter}
            onChange={(event) => setCreditTypeFilter(event.target.value)}
          >
            <option value="all">All types</option>
            {creditTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="verification-filter">Verification</label>
          <select
            id="verification-filter"
            className="filter-input"
            value={verificationFilter}
            onChange={(event) => setVerificationFilter(event.target.value)}
          >
            <option value="all">All statuses</option>
            {verificationOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="sort-key">Sort by</label>
          <select
            id="sort-key"
            className="filter-input"
            value={sortKey}
            onChange={(event) => setSortKey(event.target.value)}
          >
            <option value="name">Union name</option>
            <option value="credits">Credits available</option>
            <option value="minPrice">Min price</option>
            <option value="maxPrice">Max price</option>
            <option value="vintage">Vintage year</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="sort-order">Order</label>
          <select
            id="sort-order"
            className="filter-input"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="dashboard-container">
        {sortedUnions.map((union) => (
          <UnionCard key={union._id} union={union} />
        ))}
      </div>
      <Companies />
    </div>
  );
}
