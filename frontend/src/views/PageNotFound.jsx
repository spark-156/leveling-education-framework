import React from "react";

import { useHistory, Link } from "react-router-dom";
import { Button, Space } from "antd";
import styles from "../styles/PageNotFound.module.css";

export default function PageNotFound() {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div>Helaas bestaat deze pagina niet.</div>
      <Space>
        <Link to="/">
          <Button type="primary">
            Klik hier om naar de thuispagina te gaan!
          </Button>
        </Link>
        <Button type="secondary" onClick={() => history.goBack()}>
          Klik hier om terug te gaan!
        </Button>
      </Space>
    </div>
  );
}
