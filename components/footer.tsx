import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5"; // Ensure correct import for icons

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6">
      {/* Column 1 */}
      <div>
        <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="#">
              <span className="hover:underline">Become a Member</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="hover:underline">Sign Up for Email</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="hover:underline">Student Discounts</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="#">
              <span className="hover:underline">Order Status</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="hover:underline">Delivery</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="hover:underline">Returns</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="hover:underline">Payment Options</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="hover:underline">Contact Us on Nike.com</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="hover:underline">Contact Us on All Other Inquiries</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
        {/* Country and Copyright */}
        <div className="flex mb-4 md:mb-0 gap-2 items-center">
          <IoLocationOutline  />
          <p>India</p>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <Link href="#">
            <span className="hover:underline">Guides</span>
          </Link>
          <Link href="#">
            <span className="hover:underline">Terms of Sale</span>
          </Link>
          <Link href="#">
            <span className="hover:underline">Terms of Use</span>
          </Link>
          <Link href="#">
            <span className="hover:underline">Nike Privacy Policy</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
