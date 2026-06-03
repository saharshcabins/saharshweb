"use client";
import React from "react";
import styles from "./StatsRibbon.module.css";

export interface StatItem {
  value: string;
  label: string;
}

interface StatsRibbonProps {
  stats: StatItem[];
  topBorder?: boolean;
}

const StatsRibbon: React.FC<StatsRibbonProps> = ({
  stats,
  topBorder = true
}) => {
  return (
    <section
      className={styles.statsGridStrip}
      style={topBorder ? { borderTop: "1px solid var(--text-light-25)" } : {}}
    >
      <div className={styles.statsInner}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statBox}>
            <div className={styles.statNum}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsRibbon;
