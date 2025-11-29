import { useEffect, useState } from "react";

const ServerStatus = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data));
  }, []);

  return (
    <div className="pb-6">
      <h1 className="text-center text-lg">Server Status</h1>
      <p className="text-center text-green-600">{status}</p>
    </div>
  );
};

export default ServerStatus;
