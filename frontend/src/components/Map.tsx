type Map = { latitude: string; longitude: string };

export const Map = ({ latitude, longitude }: Map) => {
  const mapUrl = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${latitude},${longitude}+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed`;

  return (
    <iframe
      width="100%"
      height="100%"
      className="absolute inset-0"
      title="map"
      src={mapUrl}
      style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
    ></iframe>
  );
};
