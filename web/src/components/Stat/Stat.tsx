import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeTabState } from "recoil/stat";
import { ETabMenu } from "lib/enum/stat";
import StatItem from "./StatItem/StatItem";

import "./Stat.scss";

const Stat = (): JSX.Element => {
  const [activeTab, setActiveTab] = useRecoilState<ETabMenu>(activeTabState);

  const handleMenu = useCallback((id: ETabMenu) => {
    setActiveTab(id);
  }, []);

  return (
    <div className="stat">
      <div className="stat-tab">
        <div
          onClick={() => handleMenu(ETabMenu.month)}
          className={
            activeTab === 0 ? "stat-tab-item isMainTab" : "stat-tab-item"
          }
        >
          월간
        </div>
        <div
          onClick={() => handleMenu(ETabMenu.week)}
          className={
            activeTab === 1 ? "stat-tab-item isMainTab" : "stat-tab-item"
          }
        >
          주간
        </div>
        <div
          onClick={() => handleMenu(ETabMenu.day)}
          className={
            activeTab === 2 ? "stat-tab-item isMainTab" : "stat-tab-item"
          }
        >
          일간
        </div>
      </div>
      <div className="stat-content">
        <StatItem />
      </div>
    </div>
  );
};

export default Stat;
