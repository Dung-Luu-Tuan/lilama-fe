import {Link} from "react-router-dom";

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