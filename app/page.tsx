// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Project Management Tool</h1>
      <Link href="/dashboard">
        Go to Dashboard
      </Link>
    </div>
  );
}
