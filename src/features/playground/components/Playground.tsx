import { Card } from "../../../components/Card";
import UserProfile from "../../profile/components/UserProfile";

function Playground() {
  return (
    <div className="p-8 flex gap-2">
      <UserProfile
        name="Goku"
        imageUrl="https://www.shutterstock.com/shutterstock/photos/2680952823/display_1500/stock-photo-draw-goku-dragon-ball-z-when-young-2680952823.jpg"
        role="Admin"
        isAdmin={true}
      >
        <Card title="System Status">
          <p className="text-gray-600">All System Operational.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Run Diagnostics
          </button>
        </Card>
      </UserProfile>

      <UserProfile
        name="Krillin"
        imageUrl="https://dragonball.guru/wp-content/uploads/2021/03/krillin-profile-1-400x400.png"
        role="Business Executive"
        isAdmin={false}
      >
        <Card title="System Status">
          <p className="text-gray-600">All System Operational.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Run Diagnostics
          </button>
        </Card>
      </UserProfile>
    </div>
  );
}

export default Playground;
