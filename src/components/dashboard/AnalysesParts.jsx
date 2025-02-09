/* eslint-disable react/prop-types */
export const AnalysesParts = ({ types, title, number, percentage }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  const dashArray = (percentage) => {
    const percent = parseFloat(percentage);
    return `${(percent / 100) * circumference} ${circumference}`;
  };

  const dashOffset = (percentage) => {
    const percent = parseFloat(percentage);
    return circumference - (percent / 100) * circumference;
  };

  return (
    <>
      <div className={types}>
        <div className="status">
          <div className="info">
            <h3>{title}</h3>
            <h1 style={{ marginLeft: 6 }}>{number}</h1>
          </div>
          <div className="progresss">
            <svg>
              <circle
                cx="38"
                cy="38"
                r="36"
                style={{
                  strokeDasharray: dashArray(percentage),
                  strokeDashoffset: dashOffset(percentage),
                  stroke: "#4caf50",
                  strokeWidth: "6",
                  fill: "none",
                }}></circle>
            </svg>
            <div className="percentage">
              <p style={{ marginTop: 10 }}>{percentage}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
