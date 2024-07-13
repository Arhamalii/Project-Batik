import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import addonIcon from "../assets/addon-icon.svg";
import AddonNav from "../components/addonNav";
import ToolTipBtn from "../components/toolTipBtn";
import { useLoading } from "../context";
import { transformDate } from "../utils/constant";
import Layout from "./layout";

const ManageAddOn = () => {
  const { setIsLoading } = useLoading();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  // fetching refPnr from params
  const [searchParams] = useSearchParams();
  const refPNR = searchParams.get("refPNR");

  const fetchDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://api.flymalindo.com/api/web/flight/queryCode?code=${refPNR}`
      );
      if (response?.data.status === false) {
        setIsLoading(false);
        navigate("/");
      } else {
        setIsLoading(false);
        setData(response.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      navigate("/");
    }
  };
  // fetch new details on every page relaod
  useEffect(() => {
    fetchDetails();
  }, []);

  console.log(data);
  return (
    <Layout title={"Batik Air, Malaysia - Smarter Way to Travel"}>
      <AddonNav />

      <div className="bg-[#F1F1F1] min-h-[450px] py-[35px]">
        <div className="row xl:max-w-[1140px] mx-auto w-full md:container px-[15px] sm:px-[25px] xl:px-[0px]">
          <div className="bg-white max-w-[847px] min-h-[420px] p-[25px] shadow-md ">
            {/* row 1 */}
            <div className="flex gap-x-2 items-center">
              <img src={addonIcon} alt="addon-icon" className=" w-[30px]" />
              <h2 className="text-[1.27rem] font-medium text-[#333] ]">
                Manage Addons
              </h2>
            </div>

            {/* row 2 */}
            <h4 className="text-[#8f387a] font-medium mt-[20px]">
              Booking Details
            </h4>
            <div className="flex gap-x-2 items-center mt-[12px]">
              <div className="flex  gap-x-[30px] text-[#222] text-[14px] pr-[20px] inputdiv1  flex-col items-start sm:flex-row sm:ml-[3.8rem] sm:items-center">
                <label
                  htmlFor="txtPNR"
                  className=" block mb-[5px] text-[#222] font-bold text-[14px]"
                >
                  Booking Reference no. (PNR) :
                </label>
                <input
                  name="txtPNR"
                  type="text"
                  id="txtPNR"
                  className="form-control uppercase w-[300px] "
                  value={data ? data?.records[0].code : "loading..."}
                  disabled
                  style={{
                    background: "#fafafa",
                    width: "178px",
                    cursor: "not-allowed",
                  }}
                ></input>
              </div>
            </div>
            {/* row 3 */}

            <h4 className="text-[#8f387a] font-medium mt-[20px]">
              Passenger Details
            </h4>
            <div className="flex gap-x-2 items-center mt-[4px]">
              <div
                class="table-responsive overflow-scroll md:overflow-hidden "
                bis_skin_checked="1"
              >
                <table
                  class="table-border w-[710px] xl:w-[796px] "
                  id="tblpassengers"
                >
                  <thead class="table-border text-[13px] text-[#101010] bg-[#f1f1f1] border-red-400 ">
                    <tr>
                      <th class="p-2 font-medium">Sl. No</th>
                      <th class="p-2 font-medium">Passenger Name</th>
                      <th class="p-2 font-medium">Passenger Type</th>
                      <th class="p-2 font-medium">Passport Number</th>
                      <th class="p-2 font-medium">E-Ticket No</th>
                      <th class="p-2 font-medium">Seats</th>
                      <th class="p-2 font-medium">Meals</th>
                      <th class="p-2 font-medium">Assistance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.passengers.map((passenger, i) => (
                      <tr>
                        <td class="tab-05">{i + 1}</td>
                        <td class="tab-2">
                          {data?.records[i].passenger_sex === "M" ? "MR" : "MS"}{" "}
                          &nbsp;
                          {passenger.name}
                        </td>
                        <td class="tab-1">
                          {data?.records[i].passenger_type === "婴儿"
                            ? "Infant"
                            : "Adult"}
                        </td>
                        <td class="tab-1"></td>
                        <td class="tab-1">{data?.records[i].ticket_number}</td>
                        <td class="tab-1"></td>
                        <td class="tab-2"></td>
                        <td class="tab-1"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* row 4 */}
            <h4 className="text-[#8f387a]  font-medium mt-[30px]">
              Contact Details
            </h4>
            <h4 className="text-[#8f387a] text-[14px] font-medium mt-[20px]">
              Primary Contact Details
            </h4>
            <div className="flex gap-x-2 items-center mt-[8px]">
              <div
                class="table-responsive md:overflow-hidden "
                bis_skin_checked="1"
              >
                <table
                  class="table-border w-[88vw] xsm:w-[62vw] sm:w-[80vw] md:w-[710px] xl:w-[796px] "
                  id="tblpassengers"
                >
                  <thead class="table-border text-[13px] text-[#101010] bg-[#f1f1f1] border-red-400 ">
                    <tr>
                      <th class="p-2 font-medium  w-1/2 min-w-[170px]">
                        Email
                      </th>
                      <th class="p-2 font-medium w-1/2">Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="tab-05">2850598567@QQ.COM</td>
                      <td class="tab-2">6097001875</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* row 5 */}
            <h4 className="text-[#8f387a] text-[14px] font-medium mt-[30px]">
              Secondary Contact Details
            </h4>
            <p className="text-[#ff0000] font-semibold text-[12px] mt-[16px]">
              Important Note : Batik Air,Malaysia ticket purchases from 3rd
              parties/Travel Agents are advised to update contact details to
              allow us to notify you directly of any schedule changes
            </p>

            <div className="flex gap-x-2 items-center mt-[8px] flex-wrap lg:flex-nowrap">
              <div className="text-[#222] text-[14px] pr-[20px] w-full min-w-full lg:min-w-0  lg:w-[271px]">
                <label htmlFor="" className=" block mb-[5px]">
                  Email
                </label>
                <input
                  name="txtPNR"
                  type="text"
                  id="txtPNR"
                  className="form-control uppercase w-[103%] lg:w-[260px]"
                ></input>
              </div>

              <div
                id="bodycontent_divsecMobileNo"
                class="form-group col-md-8 min-w-full w-full lg:w-auto lg:min-w-max mt-[20px] lg:mt-auto"
                bis_skin_checked="1"
                style={{ minWidth: "65%" }}
              >
                <label className="text-[#222] text-[14px] block mb-[5px]">
                  Mobile No with country code
                </label>
                <div
                  id="bodycontent_ddMobileNo"
                  class="inputright"
                  bis_skin_checked="1"
                >
                  <span class="input_span man_field double">
                    <select
                      name="ctl00$bodycontent$ddlMblCountryCode"
                      id="bodycontent_ddlMblCountryCode"
                      class="form-control"
                    >
                      <option selected="selected" value="">
                        -Select Country Code-
                      </option>
                      <option value="93">Afghanistan (+93)</option>
                      <option value="355">Albania (+355)</option>
                      <option value="213">Algeria (+213)</option>
                      <option value="1684">American Samoa (+1684)</option>
                      <option value="376">Andorra (+376)</option>
                      <option value="244">Angola (+244)</option>
                      <option value="1264">Anguilla (+1264)</option>
                      <option value="672.1">Antarctica (+672)</option>
                      <option value="1268">Antigua and Barbuda (+1268)</option>
                      <option value="54">Argentina (+54)</option>
                      <option value="374">Armenia (+374)</option>
                      <option value="297">Aruba (+297)</option>
                      <option value="61.1">Australia (+61)</option>
                      <option value="43">Austria (+43)</option>
                      <option value="994">Azerbaijan (+994)</option>
                      <option value="1242">Bahamas (+1242)</option>
                      <option value="973">Bahrain (+973)</option>
                      <option value="880">Bangladesh (+880)</option>
                      <option value="1246">Barbados (+1246)</option>
                      <option value="375">Belarus (+375)</option>
                      <option value="32">Belgium (+32)</option>
                      <option value="501">Belize (+501)</option>
                      <option value="229">Benin (+229)</option>
                      <option value="1441">Bermuda (+1441)</option>
                      <option value="975">Bhutan (+975)</option>
                      <option value="591">Bolivia (+591)</option>
                      <option value="387">Bosnia and Herzegovina (+387)</option>
                      <option value="267">Botswana (+267)</option>
                      <option value="47.1">Bouvet Island (+47)</option>
                      <option value="55">Brazil (+55)</option>
                      <option value="246">
                        British Indian Ocean Territory (+246)
                      </option>
                      <option value="1284.1">
                        British Virgin Islands (+1284)
                      </option>
                      <option value="673">Brunei Darussalam (+673)</option>
                      <option value="359">Bulgaria (+359)</option>
                      <option value="226">Burkina Faso (+226)</option>
                      <option value="257">Burundi (+257)</option>
                      <option value="855">Cambodia (+855)</option>
                      <option value="237">Cameroon (+237)</option>
                      <option value="1.1">Canada (+1)</option>
                      <option value="238">Cape Verde (+238)</option>
                      <option value="1345">Cayman Islands (+1345)</option>
                      <option value="236">
                        Central African Republic (+236)
                      </option>
                      <option value="235">Chad (+235)</option>
                      <option value="56">Chile (+56)</option>
                      <option value="86">China (+86)</option>
                      <option value="61.2">
                        Christmas Island (Indian Ocean) (+61)
                      </option>
                      <option value="61.3">Cocos Islands (+61)</option>
                      <option value="57">Colombia (+57)</option>
                      <option value="269">Comoros (+269)</option>
                      <option value="242">Congo (+242)</option>
                      <option value="682">Cook Islands (+682)</option>
                      <option value="506">Costa Rica (+506)</option>
                      <option value="225.1">Cote d'Ivoire (+225)</option>
                      <option value="385">Croatia (+385)</option>
                      <option value="53">Cuba (+53)</option>
                      <option value="357">Cyprus (+357)</option>
                      <option value="420">Czech Republic (+420)</option>
                      <option value="45">Denmark (+45)</option>
                      <option value="253">Djibouti (+253)</option>
                      <option value="1767">Dominica (+1767)</option>
                      <option value="1809">Dominican Republic (+1809)</option>
                      <option value="670">East Timor (+670)</option>
                      <option value="593">Ecuador (+593)</option>
                      <option value="20">Egypt (+20)</option>
                      <option value="503">El Salvador (+503)</option>
                      <option value="240">Equatorial Guinea (+240)</option>
                      <option value="291">Eritrea (+291)</option>
                      <option value="372">Estonia (+372)</option>
                      <option value="251">Ethiopia (+251)</option>
                      <option value="500">
                        Falkland Islands (Malvinas) (+500)
                      </option>
                      <option value="298">Faroe Islands (+298)</option>
                      <option value="679">Fiji (+679)</option>
                      <option value="358">Finland (+358)</option>
                      <option value="33">France (+33)</option>
                      <option value="594">French Guiana (+594)</option>
                      <option value="689">French Polynesia (+689)</option>
                      <option value="260.1">
                        French Southern Territories (+260)
                      </option>
                      <option value="241">Gabon (+241)</option>
                      <option value="220">Gambia (+220)</option>
                      <option value="995">Georgia (+995)</option>
                      <option value="49">Germany (+49)</option>
                      <option value="233">Ghana (+233)</option>
                      <option value="350">Gibraltar (+350)</option>
                      <option value="30">Greece (+30)</option>
                      <option value="299">Greenland (+299)</option>
                      <option value="1473">Grenada (+1473)</option>
                      <option value="590">Guadeloupe (+590)</option>
                      <option value="1671">Guam (+1671)</option>
                      <option value="502">Guatemala (+502)</option>
                      <option value="224">Guinea (+224)</option>
                      <option value="245">Guinea-Bissau (+245)</option>
                      <option value="592">Guyana (+592)</option>
                      <option value="509">Haiti (+509)</option>
                      <option value="504">Honduras (+504)</option>
                      <option value="852">Hong Kong (+852)</option>
                      <option value="36">Hungary (+36)</option>
                      <option value="354">Iceland (+354)</option>
                      <option value="91">India (+91)</option>
                      <option value="62">Indonesia (+62)</option>
                      <option value="98">
                        Iran (Islamic Republic Of) (+98)
                      </option>
                      <option value="964">Iraq (+964)</option>
                      <option value="353">Ireland (+353)</option>
                      <option value="972">Israel (+972)</option>
                      <option value="39.1">Italy (+39)</option>
                      <option value="225.2">Ivory Coast (+225)</option>
                      <option value="1876">Jamaica (+1876)</option>
                      <option value="81">Japan (+81)</option>
                      <option value="962">Jordan (+962)</option>
                      <option value="7">Kazakhstan (+7)</option>
                      <option value="254">Kenya (+254)</option>
                      <option value="686">Kiribati (+686)</option>
                      <option value="850">Korea, North (+850)</option>
                      <option value="82">
                        Korea, Republic Of (South Korea) (+82)
                      </option>
                      <option value="965">Kuwait (+965)</option>
                      <option value="996">Kyrgyzstan (+996)</option>
                      <option value="856">Laos (+856)</option>
                      <option value="371">Latvia (+371)</option>
                      <option value="961">Lebanon (+961)</option>
                      <option value="266">Lesotho (+266)</option>
                      <option value="231">Liberia (+231)</option>
                      <option value="218">Libyan Arab Jamahiriya (+218)</option>
                      <option value="423">Liechtenstein (+423)</option>
                      <option value="370">Lithuania (+370)</option>
                      <option value="352">Luxembourg (+352)</option>
                      <option value="853">Macau (+853)</option>
                      <option value="389">Macedonia (+389)</option>
                      <option value="261">Madagascar (+261)</option>
                      <option value="265">Malawi (+265)</option>
                      <option value="60">Malaysia (+60)</option>
                      <option value="960">Maldives (+960)</option>
                      <option value="223">Mali (+223)</option>
                      <option value="356">Malta (+356)</option>
                      <option value="692">Marshall Islands (+692)</option>
                      <option value="596">Martinique (+596)</option>
                      <option value="222">Mauritania (+222)</option>
                      <option value="230">Mauritius (+230)</option>
                      <option value="262">Mayotte (+262)</option>
                      <option value="52">Mexico (+52)</option>
                      <option value="691">Micronesia (+691)</option>
                      <option value="373">Moldova, Republic Of (+373)</option>
                      <option value="377">Monaco (+377)</option>
                      <option value="976">Mongolia (+976)</option>
                      <option value="382">Montenegro (+382)</option>
                      <option value="1664">Montserrat (+1664)</option>
                      <option value="212.1">Morocco (+212)</option>
                      <option value="258">Mozambique (+258)</option>
                      <option value="95">Myanmar (+95)</option>
                      <option value="264">Namibia (+264)</option>
                      <option value="674">Nauru (+674)</option>
                      <option value="977">Nepal (+977)</option>
                      <option value="31">Netherlands (+31)</option>
                      <option value="599">Netherlands Antilles (+599)</option>
                      <option value="687">New Caledonia (+687)</option>
                      <option value="64">New Zealand (+64)</option>
                      <option value="505">Nicaragua (+505)</option>
                      <option value="227">Niger (+227)</option>
                      <option value="234">Nigeria (+234)</option>
                      <option value="683">Niue (+683)</option>
                      <option value="672.2">Norfolk Island (+672)</option>
                      <option value="1670">
                        Northern Mariana Islands (+1670)
                      </option>
                      <option value="47.2">Norway (+47)</option>
                      <option value="968">Oman (+968)</option>
                      <option value="92">Pakistan (+92)</option>
                      <option value="680">Palau (+680)</option>
                      <option value="970">Palestine (+970)</option>
                      <option value="507">Panama (+507)</option>
                      <option value="675">Papua New Guinea (+675)</option>
                      <option value="595">Paraguay (+595)</option>
                      <option value="51">Peru (+51)</option>
                      <option value="63">Philippines (+63)</option>
                      <option value="64">Pitcairn Island (+64)</option>
                      <option value="48">Poland (+48)</option>
                      <option value="351">Portugal (+351)</option>
                      <option value="1.2">Puerto Rico (+1)</option>
                      <option value="974">Qatar (+974)</option>
                      <option value="262">Reunion (+262)</option>
                      <option value="40">Romania (+40)</option>
                      <option value="7">Russia (+7)</option>
                      <option value="250">Rwanda (+250)</option>
                      <option value="239">
                        S. Georgia and S. Sandwich Isls. (+239)
                      </option>
                      <option value="1869">
                        Saint Kitts &amp; Nevis (+1869)
                      </option>
                      <option value="1758">Saint Lucia (+1758)</option>
                      <option value="1784">
                        Saint Vincent and The Grenadines (+1784)
                      </option>
                      <option value="685">Samoa (+685)</option>
                      <option value="378">San Marino (+378)</option>
                      <option value="239">Sao Tome and Principe (+239)</option>
                      <option value="966">Saudi Arabia (+966)</option>
                      <option value="221">Senegal (+221)</option>
                      <option value="381">Serbia (+381)</option>
                      <option value="248">Seychelles (+248)</option>
                      <option value="232">Sierra Leone (+232)</option>
                      <option value="65">Singapore (+65)</option>
                      <option value="421">Slovakia (+421)</option>
                      <option value="386">Slovenia (+386)</option>
                      <option value="677">Solomon Islands (+677)</option>
                      <option value="252">Somalia (+252)</option>
                      <option value="27">South Africa (+27)</option>
                      <option value="34">Spain (+34)</option>
                      <option value="94">Sri Lanka (+94)</option>
                      <option value="290">St. Helena (+290)</option>
                      <option value="508">
                        St. Pierre and Miquelon (+508)
                      </option>
                      <option value="249">Sudan (+249)</option>
                      <option value="597">Suriname (+597)</option>
                      <option value="47.3">
                        Svalbard and Jan Mayen Islands (+47)
                      </option>
                      <option value="268">Swaziland (+268)</option>
                      <option value="46">Sweden (+46)</option>
                      <option value="41">Switzerland (+41)</option>
                      <option value="963">Syrian Arab Republic (+963)</option>
                      <option value="886">Taiwan (+886)</option>
                      <option value="992">Tajikistan (+992)</option>
                      <option value="255">Tanzania (+255)</option>
                      <option value="66">Thailand (+66)</option>
                      <option value="228">Togo (+228)</option>
                      <option value="690">Tokelau (+690)</option>
                      <option value="676">Tonga (+676)</option>
                      <option value="1868">Trinidad and Tobago (+1868)</option>
                      <option value="216">Tunisia (+216)</option>
                      <option value="90">Turkey (+90)</option>
                      <option value="993">Turkmenistan (+993)</option>
                      <option value="1649">
                        Turks and Caicos Islands (+1649)
                      </option>
                      <option value="688">Tuvalu (+688)</option>
                      <option value="1.4">
                        U.S. Minor Outlying Islands (+1)
                      </option>
                      <option value="256">Uganda (+256)</option>
                      <option value="380">Ukraine (+380)</option>
                      <option value="971">United Arab Emirates (+971)</option>
                      <option value="44">United Kingdom (+44)</option>
                      <option value="1.3">United States of America (+1)</option>
                      <option value="598">Uruguay (+598)</option>
                      <option value="998">Uzbekistan (+998)</option>
                      <option value="678">Vanuatu (+678)</option>
                      <option value="39.2">
                        Vatican City State (Holy See) (+39)
                      </option>
                      <option value="58">Venezuela (+58)</option>
                      <option value="84">Vietnam (+84)</option>
                      <option value="1284.2">
                        Virgin Islands (British) (+1284)
                      </option>
                      <option value="1340">Virgin Islands (US) (+1340)</option>
                      <option value="681">
                        Wallis and Futuna Islands (+681)
                      </option>
                      <option value="212.2">Western Sahara (+212)</option>
                      <option value="967">Yemen, Republic Of (+967)</option>
                      <option value="891">Yugoslavia (Former) (+891)</option>
                      <option value="180">Zaire (+180)</option>
                      <option value="260.2">Zambia (+260)</option>
                      <option value="263">Zimbabwe (+263)</option>
                    </select>
                    <input
                      name="ctl00$bodycontent$txtsecmobileNo"
                      type="text"
                      maxlength="20"
                      id="bodycontent_txtsecmobileNo"
                      class="form-control telcol3 "
                      data-toggle="tooltip"
                      data-placement="bottom"
                      onkeypress="javascript:return CheckForSpecialSymbols(event)"
                      onpaste="return false"
                      data-original-title=""
                      title=""
                      data-gtm-form-interact-field-id="1"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end mt-[40px]">
              <input
                type="submit"
                name="ctl00$bodycontent$btnscndryContactInfo"
                value="Update"
                onclick="ShowLoading();"
                id="bodycontent_btnscndryContactInfo"
                class="btn btn-default btn-update"
              ></input>
            </div>
            {/* row 6  */}

            <h4 className="text-[#8f387a]  font-medium mt-[20px]">
              Flight Details
            </h4>
            <div className="flex gap-x-2 items-center mt-[8px]">
              <div
                class="table-responsive overflow-scroll md:overflow-hidden "
                bis_skin_checked="1"
              >
                <table
                  class="table-border w-[710px] xl:w-[796px] "
                  id="tblpassengers"
                >
                  <thead class="table-border text-[13px] text-[#101010] bg-[#f1f1f1] border-red-400 ">
                    <tr>
                      <th class="p-2 font-medium">Flight</th>
                      <th class="p-2 font-medium">Departing</th>
                      <th class="p-2 font-medium">Arriving</th>
                      <th class="p-2 font-medium">Class</th>
                      <th class="p-2 font-medium">Seats</th>
                      <th class="p-2 font-medium">Snacks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.records.map((records, i) => (
                      <tr>
                        <td class="tab-05">
                          Batik Air,MY <br />
                          {records.get_flight_info.couple_flight_no}
                        </td>
                        <td class="tab-2">
                          {records.get_flight_info.start_airport} <br />
                          {transformDate(records.get_flight_info.date)}{" "}
                          {records.get_flight_info.start_fly_time}
                        </td>
                        <td class="tab-1">
                          {records.get_flight_info.end_airport} <br />{" "}
                          {transformDate(records.get_flight_info.date)}{" "}
                          {records.get_flight_info.end_fly_time}
                        </td>
                        <td class="tab-1">Super Saver(T)</td>
                        <td class="tab-1"></td>
                        <td class="tab-1"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-row-reverse flex-wrap w-full mt-[40px] gap-x-2 justify-center sm:justify-start ">
              <ToolTipBtn
                btnText={"Add Baggae"}
                tooltipText={"Select your desired Baggage and pay for it."}
                path={
                  "https://search.malindoair.com/OD/OptionalAddons.aspx?t=A3"
                }
              />
              <ToolTipBtn
                btnText={"Add meals"}
                tooltipText={"Select your desired Meal and pay for it."}
                path={
                  "https://search.malindoair.com/OD/OptionalAddons.aspx?t=A3"
                }
              />
              <ToolTipBtn
                btnText={"Add Snacks"}
                tooltipText={"Select your desired Snacks and pay for it."}
                path={
                  "https://search.malindoair.com/OD/OptionalAddons.aspx?t=A3"
                }
              />
              <ToolTipBtn
                btnText={"Add Insurance"}
                tooltipText={"Select your desired Insurance and pay for it."}
                path={
                  "https://search.malindoair.com/OD/OptionalAddons.aspx?t=A3"
                }
              />
              <ToolTipBtn
                btnText={"Add Seat"}
                tooltipText={"Select your desired Seat and pay for it. "}
                path={
                  "https://search.malindoair.com/OD/OptionalAddons.aspx?t=A3"
                }
              />
              <ToolTipBtn
                btnText={"Add Get Comfy Kit"}
                tooltipText={"Select Get Comfy Kit and pay for it."}
                path={
                  "https://search.malindoair.com/OD/OptionalAddons.aspx?t=A3"
                }
              />
              <ToolTipBtn
                btnText={"Add Delayed baggage service"}
                tooltipText={"Select your desired Meal and pay for it."}
                path={"https://search.malindoair.com/OD/StartOver.aspx"}
              />
              <ToolTipBtn
                btnText={"Change Flight"}
                tooltipText={"Select your desired Flight and pay for it."}
                path={
                  "https://search.malindoair.com/OD/UserProfile/ChangeBooking.aspx?resId=OD16425263&CU=91&Culture=en-GB&t=A3"
                }
              />
              <ToolTipBtn
                btnText={"Addon Olia"}
                tooltipText={"Select your desired KLIA Ekspres and pay for it."}
                path={
                  "https://search.malindoair.com/OD/OptionalAddons.aspx?t=A3"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManageAddOn;
