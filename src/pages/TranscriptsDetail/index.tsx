import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { TranscriptResponse } from "../../types";

const TranscriptsDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useFetch<TranscriptResponse>(`${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Transcript not found</div>;

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-500 hover:underline">
        Back to List
      </Link>
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
    </div>
  );
};

export default TranscriptsDetail;
