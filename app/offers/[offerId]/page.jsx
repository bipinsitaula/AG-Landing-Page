import { APIGetOffersDetails } from "@/api/offer";
import OfferDetails from "../../components/OfferDetails";

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, '').trim();
}

async function getOffer(offerId) {
  try {
    const res = await APIGetOffersDetails(offerId);
    // Handle both { data: {...} } and direct object responses
    return res?.data ?? res ?? null;
  } catch (error) {
    console.error("Error fetching offer:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { offerId } = await params;
  const offer = await getOffer(offerId);

  if (!offer) return { title: "Offer | AG Express" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agexpress.com";
  return {
    title: offer.metaTitle || offer.title || "Offer | AG Express",
    description: offer.metaDescription || stripHtml(offer.description).slice(0, 150),
    openGraph: {
      title: offer.metaTitle || offer.title,
      description: offer.metaDescription || stripHtml(offer.description).slice(0, 200),
      images: [offer.imageUrl || `${siteUrl}/images/offer-banner.jpg`],
      url: `${siteUrl}/offers/${offerId}`,
    },
    twitter: {
      card: "summary_large_image",
      title: offer.metaTitle || offer.title,
      description: offer.metaDescription || stripHtml(offer.description).slice(0, 150),
      images: [offer.imageUrl || `${siteUrl}/images/offer-banner.jpg`],
    },
  };
}

export default async function OfferDetailsPage({ params }) {
  const { offerId } = await params;
  const offer = await getOffer(offerId);

  if (!offer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center p-10 bg-white rounded-3xl shadow-xl border border-gray-100 max-w-sm">
          <div className="text-orange-200 text-6xl mb-6">
            <i className="fa-solid fa-circle-exclamation" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Offer Not Found</h1>
          <p className="text-gray-500 mb-8">This offer does not exist or is no longer available.</p>
          <a href="/offers" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition inline-block">
            Back to All Offers
          </a>
        </div>
      </div>
    );
  }

  return <OfferDetails offerData={offer} />;
}
