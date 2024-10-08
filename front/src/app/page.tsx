import Navbar from "@/components/base/Navbar";
import HeroSection from "@/components/base/HeroSection";
import FeatureSection from "@/components/base/FeatureSection";
import UserReviews from "@/components/base/UserReviews";
import Footer from "@/components/base/Footer";
// import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { fetchChatGroup} from  "@/fetch/groupFetch"

export default async function LandingPage() {
  const session: CustomSession | null = await getServerSession(authOptions);
  const groups = await fetchChatGroup(session?.user?.token!)
  return (

    <div className="min-h-screen flex flex-col ">
      {/* Header */}
     <Navbar user={session?.user} />
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}