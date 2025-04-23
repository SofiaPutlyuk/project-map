import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

const Map = () => (
  <div className="map-wrapper">
    <MapContainer
      center={[40.645, -73.880]} 
      zoom={14}
      style={{ width: '760px', height: '760px', borderRadius: '50%', overflow: 'hidden' }}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=""
      />
    </MapContainer>
  </div>
);

export default Map;
