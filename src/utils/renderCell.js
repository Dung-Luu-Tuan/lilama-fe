import {Link} from "react-router-dom";
import {Chip} from "@mui/material";

export function renderRel(content, url, needReview) {
  const styles = {}
  if (needReview){
    styles["color"] = "red"
  }
  return (
      <Link className="rel-field" to={url} style={{ ...styles }}>
        {content}
      </Link>
  )
}

export function renderVerifyRel(content, existed){
  const styles = {}
  if (!existed || existed.need_review){
    styles["color"] = "red"
  }
  return (
      <div className="rel-field" style={{ ...styles }}>
        {content}
      </div>
  )
}

export function renderReview(needReview) {
  if (needReview){
    return <Chip label="Chưa duyệt" color="error" size="small" />
  } else {
    return <Chip label="Đã duyệt" color="success" size="small" />
  }
}