const QrImage = ({
  src,
  hasShadow = true,
}: {
  src: string;
  hasShadow?: boolean;
}) => {
  return (
    <div
      className={`bg-white rounded-lg p-1 flex-center  ${
        hasShadow && "shadow-xl"
      }`}
    >
      <img src={src} width={"100%"} alt="" />
    </div>
  );
};

export default QrImage;
