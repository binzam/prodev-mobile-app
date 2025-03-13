import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { styles } from '@/styles/_signinstyle';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGOGREEN } from '@/constants';

export default function Join() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.navGroup}>
            <TouchableOpacity onPress={() => router.push('/')}>
              <Ionicons name="arrow-back" size={25} />
            </TouchableOpacity>
            <Image source={HEROLOGOGREEN} />
          </View>
          <Text style={styles.largeText}>Create Your</Text>
          <Text style={styles.largeText}>Account</Text>
          <Text style={styles.smallText}>
            Enter your details to create a new account.
          </Text>

          <View style={styles.formGroup}>
            <View>
              <Text style={styles.placeholderText}>Email</Text>
              <TextInput
                keyboardType="email-address"
                style={styles.inputField}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.placeholderText}>Password</Text>
              <View style={styles.passwordGroup}>
                <TextInput style={{ flex: 1 }} />
                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.placeholderText}>Password</Text>
              <View style={styles.passwordGroup}>
                <TextInput style={{ flex: 1 }} />
                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>

          <View style={styles.dividerGroup}>
            <View style={styles.divider}></View>
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider}></View>
          </View>

          <View style={styles.socialMediaButtonGroup}>
            <TouchableOpacity style={styles.socialMediaButton}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <Image source={GOOGLELOGO} />
                <Text style={styles.socialMediaButtonText}>
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialMediaButton}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <Image source={FACEBOOKLOGO} />
                <Text style={styles.socialMediaButtonText}>
                  Continue with Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.subTextGroup}>
            <Text style={styles.subText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/signin')}>
              <Text style={styles.subTextJoin}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
