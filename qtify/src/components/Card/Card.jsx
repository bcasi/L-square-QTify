import React from "react";
import styles from "./Card.module.css";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";

const Card = ({ data, type }) => {
  const { id, title, description, follows, image, slug, songs } = data;

  return (
    <Tooltip
      title={`${songs?.length} ${songs?.length > 1 ? "songs" : "song"}`}
      placement="top"
    >
      <a href={`/album/${slug}`}>
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
            <p>{title}</p>
          </div>
        </div>
      </a>
    </Tooltip>
  );
};

export default Card;
