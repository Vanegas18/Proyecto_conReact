import { AnalysesMain, NewUsersMain, RecentOrdersMain } from "../index";

export const MainDashboard = () => {
  return (
    <>
      <main className="dashboard">
        <h1 className="titles">Dashboard</h1>
        <AnalysesMain />
        <NewUsersMain />
        <RecentOrdersMain />
      </main>
    </>
  );
};
