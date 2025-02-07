import { AnalysesParts } from "../index";

export const AnalysesMain = () => {
  return (
    <>
      <div className="analyse">
        <AnalysesParts
          types={"sales"}
          title={"Ventas totales"}
          number={"$6,502,474"}
          percentage={"+81%"}
        />
        <AnalysesParts
          types={"visits"}
          title={"Visitas"}
          number={"24,981"}
          percentage={"-48%"}
        />
        <AnalysesParts
          types={"searches"}
          title={"Búsquedas"}
          number={"14,147"}
          percentage={"+21%"}
        />
      </div>
    </>
  );
};
