import styles from "../../styles/Home.module.css";

export default function ServerComponent() {
  return (
    <div className={styles.serverComponent}>
      This is Server Component
      <div style={{ color: "red" }}>is style working?</div>
    </div>
  );
}
