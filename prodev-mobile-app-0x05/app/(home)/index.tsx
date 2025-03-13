import PropertyListing from '@/components/PropertyListing';
import { styles } from '@/styles/_homestyle';
import { AntDesign } from '@expo/vector-icons';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { FILTERS, SAMPLE_DATA } from '@/constants/data';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchGroup}>
        <View style={styles.searchFormGroup}>
          <View style={styles.searchControlGroup}>
            <Text style={styles.searchFormText}>Where to?</Text>
            <TextInput
              style={{ ...styles.searchControl, ...styles.searchInputText }}
              placeholder="Location . Date . Add guest"
            />
          </View>
          <View style={styles.searchButton}>
            <AntDesign name="search1" size={24} color="white" />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 72,
          backgroundColor: 'white',
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterGroup}>
            {FILTERS.map((filter, index) => (
              <View style={styles.filterContainer} key={index}>
                <Image
                  style={{
                    flex: 1,
                  }}
                  source={filter.icon}
                  resizeMode="contain"
                />
                <Text style={styles.filterText}>{filter.title}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView style={styles.listingContainer}>
        <PropertyListing listings={SAMPLE_DATA} />
        <View style={styles.paginationContainer}>
          <TouchableHighlight style={styles.showMoreButton}>
            <Text style={styles.showMoreButtonText}>Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
