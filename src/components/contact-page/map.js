import React from "react";
import { config } from "../../helpers/config";

const Map = () => {
  return (
    <iframe
      src={config.contact.mapEmbedURL}
      width="100%"
      height="450"
      title="Location Map"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{display: "block"}}
    ></iframe>
  );
};

export default Map;