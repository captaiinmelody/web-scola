import FeatureItems from "./feature-items";

const Feature = () => {
  return (
    <div className="flex-center flex-col md:flex-row gap-10">
      <FeatureItems img="explore.png" label="Telusuri Institusi" />
      <FeatureItems img="detail.png" label="Informasi Institusi" />
      <FeatureItems img="bandingkan.png" label="Bandingkan Institusi" />
    </div>
  );
};

export default Feature;
