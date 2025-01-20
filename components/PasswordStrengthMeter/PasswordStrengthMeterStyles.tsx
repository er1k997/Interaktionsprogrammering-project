import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '80%', // Ändrad bredd för att ta upp mer plats i vänstra kolumnen
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    width: '100%', // Full bredd för input-fälten
    marginBottom: 20,
    fontSize: 16,
  },
  input2: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    width: '90%', // Full bredd för input-fälten
    marginBottom: 20,
    fontSize: 16,
  },
  // Ny container för lösenord och ikon
  passwordAndIconContainer: {
    flexDirection: 'row', // Lägger fält och ikon horisontellt
    width: '100%',
  },
  progressBarWrapper: {
    flexDirection: 'row',
    height: 10,
    width: '100%',
    marginTop: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarSegment: {
    flex: 1,
    height: '100%',
    marginHorizontal: 2,
  },
  strengthMessage: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
  },
  matchText: {
    marginTop: 10,
    fontSize: 14,
    color: 'green',
    alignSelf: 'flex-start',
  },
  // Ny stil för ikonen
  iconWrapper: {
    marginLeft: 20, // Avstånd mellan lösenord och ikon
  },
  iconContainer: {
    padding: 0,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: 40, // Storlek på ikonen
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
