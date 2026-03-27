'use client';
import { useEffect, useRef } from 'react';

const locations = [
  { name: 'Hong Kong', coords: [22.3193, 114.1694], info: '<strong>Headquarters</strong><br>Jordan, Kowloon<br>+852-65937706' },
  { name: 'Guangzhou, China', coords: [23.1291, 113.2644], info: '<strong>China Head Office</strong><br>Baiyun District<br>+86-14117942' },
  { name: 'Kathmandu, Nepal', coords: [27.7172, 85.3240], info: '<strong>Nepal Head Office</strong><br>Tinkune, Kathmandu<br>+977-9766387636' },
  { name: 'Malaysia', coords: [3.1390, 101.6869], info: '<strong>Malaysia Branch</strong><br>Coverage Across Malaysia' },
  { name: 'Singapore', coords: [1.3521, 103.8198], info: '<strong>Singapore Branch</strong><br>Coverage Across Singapore' },
  { name: 'Macau', coords: [22.1987, 113.5439], info: '<strong>Macau Branch</strong><br>Coverage Across Macau' },
  { name: 'London, UK', coords: [51.5074, -0.1278], info: '<strong>UK Office</strong><br>London' },
  { name: 'USA', coords: [37.0902, -95.7129], info: '<strong>USA Office</strong><br>Nationwide Coverage' },
];

export default function NetworkMap() {
  const mapRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (mapRef.current) return;

    const init = async () => {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      if (mapRef.current || !containerRef.current) return;

      mapRef.current = L.map(containerRef.current, {
        center: [25, 30],
        zoom: 2.2,
        minZoom: 2,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 20,
        noWrap: true,
      }).addTo(mapRef.current);

      L.control.zoom({ position: 'bottomright' }).addTo(mapRef.current);

      mapRef.current.on('click', () => {
        mapRef.current?.flyTo([25, 30], 2.2, { animate: true, duration: 1.5 });
      });

      const icon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="width:14px;height:14px;background:#f97316;border-radius:50%;border:2px solid white;box-shadow:0 2px 5px rgba(0,0,0,0.3);position:relative;">
                 <div style="position:absolute;inset:0;background:#fb923c;border-radius:50%;animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite;opacity:0.75;"></div>
               </div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      locations.forEach(loc => {
        const marker = L.marker(loc.coords, { icon }).addTo(mapRef.current);
        marker.bindTooltip(
          `<div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;padding:4px 2px;">
            <div style="font-weight:800;color:#ea580c;margin-bottom:2px;"><i class="fa-solid fa-location-dot" style="margin-right:4px;"></i>${loc.name}</div>
            <div style="color:#4b5563;line-height:1.5;">${loc.info}</div>
          </div>`,
          { direction: 'top', className: 'custom-leaflet-tooltip', offset: [0, -12] }
        );
        marker.on('click', e => {
          e.originalEvent.stopPropagation();
          mapRef.current?.flyTo(loc.coords, 6, { animate: true, duration: 1.5 });
        });
      });
    };

    init();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl z-0" />;
}
