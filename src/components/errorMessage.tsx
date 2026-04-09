// src/components/common/ErrorMessage.tsx

interface Props {
  message?: string;
}

export default function ErrorMessage({
  message = "Something went wrong. Please try again.",
}: Props) {
  return (
    <div
      style={{
        padding: "20px",
        margin: "20px 0",
        backgroundColor: "#ffe6e6",
        color: "#cc0000",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h3>⚠️ Error</h3>
      <p>{message}</p>
    </div>
  );
}