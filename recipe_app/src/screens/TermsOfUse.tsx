import {View, Text, ScrollView} from "react-native";
import styles from "../stylesheets/TermsOfUse_stylesheet";
import FocusAwareStatusBar from "../components/StatusBarStyle";
import React from "react";
import general from "../stylesheets/General_stylesheet";
import {useTheme} from "@react-navigation/native";

const TermsOfUse = () => {
    const {colors} = useTheme();
    const theme = useTheme();
    
    return (
        <View style={[styles.container, general.container, {backgroundColor: colors.background}]}>
            {theme.dark ? <FocusAwareStatusBar barStyle="light-content" backgroundColor="#252525" /> : <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fefefe" />}
            <ScrollView>
                <Text style={[styles.textTitle, {color:colors.text}]}>1. Terms</Text>
                <Text style={[styles.text, {color:colors.text}]}>
                    By accessing the website at https://www.recipeapp.com, you are agreeing to be bound by these terms of service, all
                    applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                    If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials
                    contained in this website are protected by applicable copyright and trademark law.
                </Text>
                <Text style={[styles.textTitle, {color:colors.text}]}>2. Use License</Text>
                <Text style={[styles.text, {color:colors.text}]}>
                    Permission is granted to temporarily download one copy of the materials (information or software) on
                    RecipeApp's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                    transfer of title, and under this license you may not:
                    {"\n\n"}
                    modify or copy the materials;
                    use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
                    attempt to decompile or reverse engineer any software contained on RecipeApp's website;
                    remove any copyright or other proprietary notations from the materials; or
                    transfer the materials to another person or "mirror" the materials on any other server.
                    {"\n\n"}
                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by
                    RecipeApp at any time. Upon terminating your viewing of these materials or upon the termination of this license,
                    you must destroy any downloaded materials in your possession whether in electronic or printed format.
                </Text>
                <Text style={[styles.textTitle, {color:colors.text}]}>3. Disclaimer</Text>
                <Text style={[styles.text, {color:colors.text}]}>
                    The materials on RecipeApp's website are provided on an 'as is' basis. RecipeApp makes no warranties, expressed or
                    implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or
                    conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or
                    other violation of rights.
                    {"\n\n"}
                    Further, RecipeApp does not warrant or make any representations concerning the accuracy, likely results, or
                    reliability of the use of the materials on its website or otherwise relating to such materials or on any sites
                    linked to this site.
                </Text>
                <Text style={[styles.textTitle, {color:colors.text}]}>4. Limitations</Text>
                <Text style={[styles.text, {color:colors.text}]}>
                    In no event shall RecipeApp or its suppliers be liable for any damages (including, without limitation, damages for
                    loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials
                    on RecipeApp's website, even if RecipeApp or a RecipeApp authorized representative has been notified orally or in
                    writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied
                    warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to
                    you.
                </Text>
                <Text style={[styles.textTitle, {color:colors.text}]}>5. Accuracy of materials</Text>
                <Text style={[styles.text, {color:colors.text}]}>
                    The materials appearing on RecipeApp's website could include technical, typographical, or photographic errors.
                    RecipeApp does not warrant that any of the materials on its website are accurate, complete or current. RecipeApp
                    may make changes to the materials contained on its website at any time without notice. However RecipeApp does not
                    make any commitment to update the materials.
                </Text>
                <Text style={[styles.textTitle, {color:colors.text}]}>6. Links</Text>
                <Text style={[styles.text, {color:colors.text}]}>
                    RecipeApp has not reviewed all of the sites linked to its website and is not responsible for the contents of any
                    such linked site. The inclusion of any link does not imply endorsement by RecipeApp of the site. Use of any such
                    linked website is at the user's own risk.
                </Text>
                <Text style={[styles.textTitle, {color:colors.text}]}>7. Modifications</Text>
                <Text style={[styles.text, {color:colors.text}]}>
                    RecipeApp may revise these terms of service for its website at any time without notice. By using this website you
                    are agreeing to be bound by the then current version of these terms of service.
                </Text>
                <Text style={[styles.textTitle, {color:colors.text}]}>8. Governing Law</Text>
                <Text style={[styles.text, {color:colors.text}]}>
                    These terms and conditions are governed by and construed in accordance with the laws of United States and you
                    irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </Text>
            </ScrollView>
        </View>
    );
};

export default TermsOfUse;