interface Props {
  message?: string;
}

export default function ErrorMessage({
  message = "Something went wrong. Please try again.",
}: Props) {
  return (
    <div className="my-6 rounded-lg border border-red-500/30 bg-red-500/10 p-6 text-center">
      <h3 className="text-red-400 text-lg font-semibold mb-2">⚠️ Error</h3>
      <p className="text-red-300">{message}</p>
    </div>
  );
}