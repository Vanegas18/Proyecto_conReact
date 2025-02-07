/* eslint-disable react/prop-types */
export const AnalysesParts = ({ types, title, number, percentage }) => {
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
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="percentage">
              <p>{percentage}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
