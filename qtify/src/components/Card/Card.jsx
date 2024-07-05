import React from "react";
import styles from "./Card.module.css";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

const Card = ({ data, type }) => {
  const { id, title, description, follows, image, slug, songs } = data;

  return (
    <Tooltip
      title={`${songs?.length} ${songs?.length > 1 ? "songs" : "song"}`}
      placement="top"
    >
      <Link to={`album/${slug}`} className={styles.link}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img
              alt="music"
              src={image}
              loading="lazy"
              className={styles.card_img}
            />

            <div className={styles.banner}>
              <Chip label={follows + " Follows"} className={styles.chip} />
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <p className={styles.title}>{title}</p>
          </div>
        </div>
      </Link>
    </Tooltip>
  );
};

export default Card;
