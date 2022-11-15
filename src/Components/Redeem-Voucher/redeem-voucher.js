import { useState } from "react";
import { Link } from "react-router-dom";
import "./Redeem-Voucher.css";

export const RedeemVoucher = () => {
  const [showAccordion, setAccordionState] = useState(false);
  const [icon, setIconState] = useState("fas fa-angle-down");

  const handleAccordion = () => {
    setAccordionState(!showAccordion);
    setIconState(showAccordion ? "fas fa-angle-down" : "fas fa-angle-up");
  };

  return (
    <div className="redeem-container">
      <h1 className="text-center pt-5 fw-normal">Redeem your voucher</h1>
      <h6 className="text-center fw-normal">Enter your voucher code below:</h6>
      <div className="form-container mt-5">
        <form action="">
          <input
            type="text"
            placeholder="Enter your voucher code"
            className="redeem-input"
          />
          <button className="show-more btn-medium">Redeem</button>
        </form>
      </div>
      <div className="voucher-info mt-5 ml-5">
        <p className="voucher-title">Sky Store Vouchers</p>
        <p>
          Got a Sky Store Voucher? Simply enter your voucher code to get
          started.
        </p>
        <p>
          Buy & Keep all the latest movies direct from the cinema and TV shows
          too. Straight to your TV*, on your devices and the DVD or box set in
          the post.
        </p>
        <p className="mt-5">
          <Link to="#">Frequently Asked Questions.</Link>
        </p>
        <p className="mt-3 required">
          *Requires compatible <Link to="#">Sky box or NOW TV box</Link>{" "}
          connected to broadband
        </p>
      </div>
      <div className="terms-conditions text-left mt-5">
        <div className="terms-title" onClick={handleAccordion}>
          <h6>Terms and Conditions For Sky Store Vouchers</h6>
          <i className={icon}></i>
        </div>
        {showAccordion ? (
          <div className="terms-information">
            <div className="collapsable__details-container">
              <div className="vouchers-redeem-terms">
                <p>
                  {/* react-text: 12146 */}These Terms and Conditions were last
                  updated in May 2017 in relation to clause 3 by adding a new
                  voucher type.
                  {/* /react-text */}
                </p>
                <p>
                  {/* react-text: 12148 */}Vouchers are issued in the UK by Sky
                  UK Limited and in the Republic of Ireland by Sky Ireland
                  Limited (collectively "{/* /react-text */}
                  <b>
                    {/* react-text: 12150 */}Sky{/* /react-text */}
                  </b>
                  {/* react-text: 12151 */}").&nbsp;{/* /react-text */}
                </p>
                <p>
                  {/* react-text: 12153 */}By redeeming your Voucher, you agree
                  to the following conditions:{/* /react-text */}
                </p>
                <ol className="mt-3">
                  <li>
                    {/* react-text: 12156 */}Unless stated otherwise, Vouchers
                    may only be redeemed and spent on either the Sky Store
                    website located at&nbsp;
                    {/* /react-text */}
                    <a href="http://www.skystore.com">
                      {/* react-text: 12158 */}skystore.com{/* /react-text */}
                    </a>
                    {/* react-text: 12159 */}&nbsp;(the "{/* /react-text */}
                    <b>
                      {/* react-text: 12161 */}Website{/* /react-text */}
                    </b>
                    {/* react-text: 12162 */}") or the Sky Store app on your
                    compatible Roku box or Android device. Vouchers cannot be
                    used for purchases made on a Sky+HD box or a Sky Q box.
                    However, Buy &amp; Keep purchases made using redeemed
                    Vouchers can be sent to the box.{/* /react-text */}
                  </li>
                  <li>
                    <b>
                      {/* react-text: 12165 */}Eligibility{/* /react-text */}
                    </b>
                    {/* react-text: 12166 */}:&nbsp;To redeem a Voucher you must
                    have a SkyiD account and have accepted the Sky Store terms
                    and conditions. These terms apply in addition to the Sky
                    Store terms and conditions and in the event of any conflict,
                    these terms prevail.{/* /react-text */}
                  </li>
                  <li>
                    <b>
                      {/* react-text: 12169 */}Redemption{/* /react-text */}
                    </b>
                    {/* react-text: 12170 */}:&nbsp;Vouchers are either assigned
                    a fixed monetary value ("{/* /react-text */}
                    <b>
                      {/* react-text: 12172 */}Monetary Vouchers
                      {/* /react-text */}
                    </b>
                    {/* react-text: 12173 */}") , or a percentage or monetary
                    value off the purchase price ("{/* /react-text */}
                    <b>
                      {/* react-text: 12175 */}Discount Vouchers
                      {/* /react-text */}
                    </b>
                    {/* react-text: 12176 */}") or permit access to a particular
                    title ("
                    {/* /react-text */}
                    <b>
                      {/* react-text: 12178 */}Content Vouchers
                      {/* /react-text */}
                    </b>
                    {/* react-text: 12179 */}", collectively with Monetary
                    Vouchers and Discount Vouchers, the "{/* /react-text */}
                    <b>
                      {/* react-text: 12181 */}Vouchers{/* /react-text */}
                    </b>
                    {/* react-text: 12182 */}"). Depending on your Voucher type,
                    we'll either reduce the price of your next purchase by the
                    amount stated on your Discount Voucher, add the title or
                    amount of credit your Voucher entitles you to, to your Sky
                    Store account on the Website when you redeem the
                    Voucher.&nbsp;{/* /react-text */}
                  </li>
                  <li>
                    {/* react-text: 12184 */}Vouchers must be redeemed by the
                    expiry date specified on the Voucher or in accompanying
                    materials.
                    {/* /react-text */}
                  </li>
                  <li>
                    {/* react-text: 12186 */}When redeemed, Monetary Vouchers
                    will credit your account with a value in the local currency
                    and all purchases will be with that currency. When you make
                    a purchase, the cost will be deducted from the value held in
                    your account and if there is any difference between the cost
                    of the purchase and the value in your account, you will need
                    to pay this amount.{/* /react-text */}
                  </li>
                  <li>
                    {/* react-text: 12188 */}Once added to your account, for any
                    Vouchers issued from 16th December 2016, you will have 12
                    months in which to use your credit balance before the
                    balance is removed from your account. For Vouchers issued
                    prior to this date you will have 36 months in which to use
                    your credit balance before it is removed from your
                    account.&nbsp;
                    {/* /react-text */}
                  </li>
                  <li>
                    {/* react-text: 12190 */}Any unused balances are not
                    redeemable for cash or transferable and will not be returned
                    to you (unless we are required to by law).
                    {/* /react-text */}
                  </li>
                  <li>
                    {/* react-text: 12192 */}Content Vouchers can only be used
                    in relation to the title or content for which they are
                    issued and set out either on the Voucher itself or within
                    the accompanying materials.
                    {/* /react-text */}
                  </li>
                  <li>
                    {/* react-text: 12194 */}You can't re-load or top-up
                    Vouchers.
                    {/* /react-text */}
                  </li>
                  <li>
                    {/* react-text: 12196 */}Vouchers are for your own personal
                    non-commercial use and not for resale.{/* /react-text */}
                  </li>
                  <li>
                    {/* react-text: 12198 */}If you received a Voucher because
                    you placed another order with Sky and you subsequently
                    cancel that other order (for example, if you exercise your
                    cooling off rights in respect to it) we reserve the right to
                    cancel the voucher and/or remove the voucher balance from
                    your Sky Store account. subsequently cancel that other order
                    (for example, if you exercise your cooling off rights in
                    respect to it) we reserve the right to cancel the voucher
                    and/or remove the voucher balance from your Sky Store
                    account.
                    {/* /react-text */}
                  </li>
                  <li>
                    {/* react-text: 12200 */}Sky is not responsible for any
                    Vouchers that are lost, stolen, destroyed or used without
                    your permission.
                    {/* /react-text */}
                  </li>
                  <li>
                    {/* react-text: 12202 */}If a valid Voucher cannot be
                    redeemed as expected because it is faulty we'll replace it.
                    {/* /react-text */}
                  </li>
                  <li>
                    {/* react-text: 12204 */}A Voucher is not a credit, debit or
                    charge card. A Voucher cannot be exchanged for other
                    Vouchers and is not refundable (for cash or otherwise),
                    except to the extent required by law.{/* /react-text */}
                  </li>
                  <li>
                    {/* react-text: 12206 */}We may update or amend these terms
                    and conditions from time to time to improve the Sky Store
                    service or as new products and features become available.
                    The latest version of the terms and conditions will be
                    available on the Website.{/* /react-text */}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
