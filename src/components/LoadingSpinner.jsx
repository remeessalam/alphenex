export const LoadingSpinner = () => {
  return (
    <div aria-label="Loading..." className="spinner-parent" role="status">
      <div className="spinner-container">
        <span className="loader"></span>
        <span className="loader-text">AI</span>
      </div>
    </div>
  );
};
