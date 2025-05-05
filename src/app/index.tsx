import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

import LogoPng from '../../assets/images/logo.png';
import { Colors } from "../constants/Colors";
import { Button } from "../presentation/components";

export default function HomeSignInScreen() {
    const router = useRouter();

    const handleGoToOnboarding = () => {
        router.push('/onboarding');
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    source={LogoPng}
                    width={200}
                    height={160}
                    style={styles.image} 
                />
            </View>
            
            <View style={styles.footer}>
                <Button 
                    iconLeft="FGGoogle"
                    title="Continue com Google"
                    variant="secondary"
                    onPress={() => router.navigate('/(tabs)')} 
                />
                <Button 
                    iconLeft="FGApple"
                    title="Continue com Apple" 
                    variant="secondary" 
                    onPress={() => router.navigate('/(tabs)')} 
                />
                <Button 
                    title="Login com e-mail" 
                    onPress={() => router.navigate('/(tabs)')} 
                />
                <Pressable onPress={handleGoToOnboarding}>
                    <Text style={styles.onboardingLink}>
                        Ver tour novamente
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        gap: 16,
        paddingHorizontal: 16,
        paddingBottom: 32,
    },
    imageWrapper: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    image: { 
        width: 160, 
        height: 200,
    },
    onboardingLink: {
        color: Colors.neutral[400],
        textAlign: 'center',
        fontFamily: 'Poppins_400Regular',
        marginTop: 16,
    }
});
