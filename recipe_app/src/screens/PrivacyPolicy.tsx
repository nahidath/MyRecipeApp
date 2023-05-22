import {View, Text, ScrollView} from "react-native";
import styles from "../stylesheets/PrivacyPolicy_stylesheet";
import FocusAwareStatusBar from "../components/StatusBarStyle";
import React from "react";
import general from "../stylesheets/General_stylesheet";
import {useTheme} from "@react-navigation/native";

const PrivacyPolicy = () => {

    const {colors} = useTheme();
    const theme = useTheme();

    return (
        <View style={[styles.container, general.container, {backgroundColor :  colors.background}]}>
            {theme.dark ? <FocusAwareStatusBar barStyle="light-content" backgroundColor="#252525" />  :  <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fefefe" />}
               <ScrollView>
                   <View style={{margin :  10}}>
                     <Text style={[styles.text, {fontStyle : 'italic', color :  colors.text}]}>Last updated :  2021-05-01</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                       {"\n\n"}
                       We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
                     </Text>
                     <Text style={[styles.textTitle, {color :  colors.text}]}>Interpretation and Definitions</Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Interpretation</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>The words of which the initial letter is capitalized have meanings defined under the following conditions.
                       {"\n\n"}
                       The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                     </Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Definitions</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       For the purposes of this Privacy Policy  : 
                       {"\n\n"}
                       Account means a unique account created for You to access our Service or parts of our Service.
                       {"\n\n"}
                       Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to MyRecipeApp.
                        {"\n\n"}
                       Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                     </Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Country refers to  :  France</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                        {"\n\n"}
                       Personal Data is any information that relates to an identified or identifiable individual.
                     </Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Service refers to the Website</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                        {"\n\n"}
                       Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                       {"\n\n"}
                       Website refers to MyRecipeApp, accessible from https : //www.myrecipeapp.com
                       {"\n\n"}
                       You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                     </Text>
                     <Text style={[styles.textTitle, {color :  colors.text}]}>Collecting and Using Your Personal Data</Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Types of Data Collected</Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Personal Data</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to : 
                        {"\n\n"}
                        - Email address
                        {"\n\n"}
                        - First name and last name
                     </Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Usage Data</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       Usage Data is collected automatically when using the Service.
                        {"\n\n"}
                        Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                        {"\n\n"}
                        When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                        {"\n\n"}
                        We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                     </Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Tracking Technologies and Cookies</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
                        {"\n\n"}
                        You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.
                        {"\n\n"}
                        Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
                        {"\n\n"}
                        We use both session and persistent Cookies for the purposes set out below : 
                        {"\n\n"}
                        - Necessary / Essential Cookies
                        {"\n\n"}
                        Type :  Session Cookies
                        {"\n\n"}
                        Administered by :  Us
                        {"\n\n"}
                        Purpose :  These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                        {"\n\n"}
                        - Cookies Policy / Notice Acceptance Cookies
                        {"\n\n"}
                        Type :  Persistent Cookies
                        {"\n\n"}
                        Administered by :  Us
                        {"\n\n"}
                        Purpose :  These Cookies identify if users have accepted the use of cookies on the Website.
                        {"\n\n"}
                        - Functionality Cookies
                        {"\n\n"}
                        Type :  Persistent Cookies
                        {"\n\n"}
                        Administered by :  Us
                        {"\n\n"}
                        Purpose :  These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                        {"\n\n"}
                       For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
                     </Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Use of Your Personal Data</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       The Company may use Personal Data for the following purposes : 
                        {"\n\n"}
                        - To provide and maintain our Service, including to monitor the usage of our Service.
                        {"\n\n"}
                        - To manage Your Account :  to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                        {"\n\n"}
                        - For the performance of a contract :  the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
                        {"\n\n"}
                        - To contact You :  To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
                        {"\n\n"}
                        - To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                        {"\n\n"}
                        - To manage Your requests :  To attend and manage Your requests to Us.
                        {"\n\n"}
                        - For other purposes :  We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
                        {"\n\n"}
                        - We may share your personal information in the following situations : 
                        {"\n\n"}
                        - With Service Providers :  We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
                        {"\n\n"}
                        - For Business transfers :  We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company.
                        {"\n\n"}
                        - With Affiliates :  We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                        {"\n\n"}
                        - With Business partners :  We may share Your information with Our business partners to offer You certain products, services or promotions.
                        {"\n\n"}
                        - With other users :  when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.
                        {"\n\n"}
                        - With Your consent :  We may disclose Your personal information for any other purpose with Your consent.
                     </Text>

                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Retention of Your Personal Data</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                        {"\n\n"}
                        The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                     </Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Transfer of Your Personal Data</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
                        {"\n\n"}
                        Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                        {"\n\n"}
                        The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                     </Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Disclosure of Your Personal Data</Text>
                     <Text style={styles.textSub}>Business Transactions</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</Text>
                     <Text style={styles.textSub}>Law enforcement</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</Text>
                     <Text style={styles.textSub}>Other legal requirements</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       The Company may disclose Your Personal Data in the good faith belief that such action is necessary to : 
                       {"\n\n"}
                         - Comply with a legal obligation
                          {"\n\n"}
                          - Protect and defend the rights or property of the Company
                          {"\n\n"}
                          - Prevent or investigate possible wrongdoing in connection with the Service
                          {"\n\n"}
                          - Protect the personal safety of Users of the Service or the public
                          {"\n\n"}
                          - Protect against legal liability

                     </Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Security of Your Personal Data</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Children's Privacy</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
                        {"\n\n"}
                        If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
                     </Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Links to Other Websites</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                        {"\n\n"}
                        We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                     </Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Changes to this Privacy Policy</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                        {"\n\n"}
                        We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
                        {"\n\n"}
                        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                     </Text>
                     <Text style={[styles.textSubTitle, {color :  colors.text}]}>Contact Us</Text>
                     <Text style={[styles.text, {color :  colors.text}]}>
                       If you have any questions about this Privacy Policy, You can contact us : 
                        {"\n\n"}
                       - By email :  myrecipeappcontact@gmail.com
                       {"\n\n"}
                     </Text>
                     <Text style={[styles.text, {fontStyle : 'italic', color :  colors.text}]}>This document was last updated on May 25, 2020</Text>
                     <Text style={[styles.text, {fontStyle : 'italic', color :  colors.text}]}>Privacy Policy created with GetTerms.</Text>
                </View>
               </ScrollView>
        </View>

    )
}

export default PrivacyPolicy;