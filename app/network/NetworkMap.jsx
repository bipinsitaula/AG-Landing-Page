'use client';
import { useEffect, useRef } from 'react';

const locations = [
  { id: 'hk', name: 'Hong Kong', coords: [22.3193, 114.1694], info: '<strong>Headquarters</strong><br>Jordan, Kowloon<br>+852-65937706', type: 'hub' },
  { id: 'gz', name: 'Guangzhou, China', coords: [23.1291, 113.2644], info: '<strong>China Head Office</strong><br>Baiyun District<br>+86-14117942', type: 'branch' },
  { id: 'ktm', name: 'Kathmandu, Nepal', coords: [27.7172, 85.3240], info: '<strong>Nepal Head Office</strong><br>Tinkune, Kathmandu<br>+977-9766387636', type: 'hub' },
  { id: 'my', name: 'Malaysia', coords: [3.1390, 101.6869], info: '<strong>Malaysia Branch</strong><br>Coverage Across Malaysia', type: 'branch' },
  { id: 'sg', name: 'Singapore', coords: [1.3521, 103.8198], info: '<strong>Singapore Branch</strong><br>Coverage Across Singapore', type: 'branch' },
  { id: 'mo', name: 'Macau', coords: [22.1987, 113.5439], info: '<strong>Macau Branch</strong><br>Coverage Across Macau', type: 'branch' },
  { id: 'uk', name: 'London, UK', coords: [51.5074, -0.1278], info: '<strong>UK Office</strong><br>London', type: 'branch' },
  { id: 'us', name: 'USA', coords: [37.0902, -95.7129], info: '<strong>USA Office</strong><br>Nationwide Coverage', type: 'branch' },
];

export default function NetworkMap() {
  const mapRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (mapRef.current) return;

    let isMounted = true;

    const init = async () => {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      if (!isMounted || mapRef.current || !containerRef.current) return;

      // Map Instance with Bounds and Zoom Constraints
      mapRef.current = L.map(containerRef.current, {
        center: [25, 30],
        zoom: 2.8,
        minZoom: 2.5,
        maxBounds: [[-60, -180], [80, 180]],
        maxBoundsViscosity: 1.0,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      // Match background to Voyager tiles water color
      containerRef.current.style.background = '#cdf3ff';

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 20,
        noWrap: false,
      }).addTo(mapRef.current);

      L.control.zoom({ position: 'bottomright' }).addTo(mapRef.current);

      const createRadarIcon = (isMainHub) => L.divIcon({
        className: 'custom-div-icon',
        html: `
          <div style="position:relative;width:${isMainHub ? '20px' : '14px'};height:${isMainHub ? '20px' : '14px'};">
            <div style="position:absolute;inset:0;background:${isMainHub ? '#ea580c' : '#f97316'};border:2px solid white;border-radius:50%;box-shadow:0 0 15px rgba(249,115,22,0.5);z-index:2;"></div>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const hkCoords = locations[0].coords;

      locations.forEach((loc, idx) => {
        if (!mapRef.current) return;
        const isHub = loc.type === 'hub';
        const marker = L.marker(loc.coords, { icon: createRadarIcon(isHub) }).addTo(mapRef.current);
        
        // Static Connection lines
        if (idx !== 0) {
          L.polyline([hkCoords, loc.coords], {
            color: '#f97316',
            opacity: 0.4,
            weight: 1.5,
            smoothFactor: 1
          }).addTo(mapRef.current);
        }

        marker.bindTooltip(
          `<div style="padding:16px; min-width:220px;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
              <div style="width:40px; height:40px; background:#fff7ed; border-radius:12px; display:flex; align-items:center; justify-content:center; color:#f97316; font-size:18px;">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <div style="font-weight:800; color:#111827; font-size:16px; line-height:1.2;">${loc.name}</div>
                <div style="font-size:10px; color:#f97316; font-weight:800; text-transform:uppercase; letter-spacing:0.1em; margin-top:2px;">${isHub ? 'Primary Hub' : 'Network Node'}</div>
              </div>
            </div>
            <div style="color:#4b5563; font-size:12px; line-height:1.6; border-top:1px solid #f3f4f6; padding-top:12px; margin-top:10px;">
              ${loc.info.replace(/<strong>/g, '<strong style="color:#111827; display:block; margin-bottom:2px; font-size:13px;">')}
            </div>
          </div>`,
          { direction: 'top', className: 'custom-leaflet-tooltip', offset: [0, -18] }
        );

        marker.on('click', e => {
          e.originalEvent.stopPropagation();
          mapRef.current?.flyTo(loc.coords, 6, { animate: true, duration: 1.5 });
        });
      });

      mapRef.current.on('click', () => {
        mapRef.current?.flyTo([25, 30], 2.8, { animate: true, duration: 1.5 });
      });
    };

    init();

    return () => {
      isMounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full group overflow-hidden rounded-[2.5rem] bg-[#cdf3ff]">
       <div ref={containerRef} className="w-full h-[450px] md:h-[550px] lg:h-[700px] z-0 transition-opacity duration-1000" />
    </div>
  );
}


