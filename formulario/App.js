import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Nombre de usuario es requerido"),
  email: yup.string().email("Email no válido").required("Email es requerido"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Contraseña es requerida"),
  day: yup.string().required("Día es requerido"),
  month: yup.string().required("Mes es requerido"),
  year: yup
    .string()
    .required("Año es requerido")
    .test("age", "Debes ser mayor de 18 años", function (value) {
      if (!value) return false;

      const birthDate = new Date(
        parseInt(value),
        parseInt(this.parent.month) - 1,
        parseInt(this.parent.day)
      );

      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        return age - 1 >= 18;
      }

      return age >= 18;
    }),
  country: yup.string().required("País es requerido"),
});

const countries = [
  "Argentina",
  "Brasil",
  "Canadá",
  "Chile",
  "China",
  "Colombia",
  "España",
  "Estados Unidos",
  "Francia",
  "Italia",
  "Japón",
  "México",
  "Perú",
  "Portugal",
  "Reino Unido",
  "Uruguay",
  "Venezuela",
].sort();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentYear = new Date().getFullYear();

const years = Array.from({ length: 100 }, (_, i) =>
  (currentYear - 99 + i).toString()
);

export default function App() {
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        day: "",
        month: "",
        year: "",
        country: "",
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        setFieldValue,
      }) => (
        <View style={styles.container}>
          <Text style={styles.header}>Create your account</Text>
          <StatusBar style="auto" />
          <View style={styles.bigForm}>
            <View style={styles.form}>
              <Text style={styles.formText}>Username:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              {errors.username && (
                <Text style={styles.error}>{errors.username}</Text>
              )}
            </View>

            <View style={styles.form}>
              <Text style={styles.formText}>Email:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            </View>

            <View style={styles.form}>
              <Text style={styles.formText}>Password:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={true}
              />
              {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
            </View>

            <View style={styles.form}>
              <Text style={styles.formText}>Date of birth:</Text>
              <View style={styles.datePickersContainer}>
                <View style={[styles.pickerContainer, styles.datePickerItem]}>
                  <Picker
                    style={styles.picker}
                    selectedValue={values.day}
                    onValueChange={(itemValue) =>
                      setFieldValue("day", itemValue)
                    }
                  >
                    <Picker.Item label="Day" value="" />
                    {Array.from({ length: 31 }, (_, i) => (
                      <Picker.Item
                        key={(i + 1).toString()}
                        label={(i + 1).toString()}
                        value={(i + 1).toString()}
                      />
                    ))}
                  </Picker>
                </View>

                <View style={[styles.pickerContainer, styles.datePickerItem]}>
                  <Picker
                    style={styles.picker}
                    selectedValue={values.month}
                    onValueChange={(itemValue) =>
                      setFieldValue("month", itemValue)
                    }
                  >
                    <Picker.Item label="Month" value="" />
                    {months.map((month, index) => (
                      <Picker.Item
                        key={month}
                        label={month}
                        value={(index + 1).toString()}
                      />
                    ))}
                  </Picker>
                </View>

                <View style={[styles.pickerContainer, styles.datePickerItem]}>
                  <Picker
                    style={styles.picker}
                    selectedValue={values.year}
                    onValueChange={(itemValue) =>
                      setFieldValue("year", itemValue)
                    }
                  >
                    <Picker.Item label="Year" value="" />
                    {years.map((year) => (
                      <Picker.Item key={year} label={year} value={year} />
                    ))}
                  </Picker>
                </View>
              </View>

              <View style={styles.dateErrors}>
                {errors.day && <Text style={styles.error}>{errors.day}</Text>}
                {errors.month && (
                  <Text style={styles.error}>{errors.month}</Text>
                )}
                {errors.year && <Text style={styles.error}>{errors.year}</Text>}
              </View>
            </View>

            <View style={styles.form}>
              <Text style={styles.formText}>Country:</Text>
              <View
                style={[styles.pickerContainer, styles.countryPickerContainer]}
              >
                <Picker
                  style={styles.picker}
                  selectedValue={values.country}
                  onValueChange={(itemValue) =>
                    setFieldValue("country", itemValue)
                  }
                >
                  <Picker.Item label="Select a country" value="" />
                  {countries.map((country) => (
                    <Picker.Item
                      key={country}
                      label={country}
                      value={country}
                    />
                  ))}
                </Picker>
              </View>
              {errors.country && (
                <Text style={styles.error}>{errors.country}</Text>
              )}
            </View>
          </View>
          <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#0c3c5d",
                textAlign: "center",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50,
  },

  header: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0c3c5d",
  },

  form: {
    width: "400",
    padding: 7,
    marginHorizontal: 20,
  },

  formText: {
    fontSize: 20,
    color: "#2e779f",
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    marginTop: 10,
    borderRadius: 10,
    borderColor: "rgb(77, 77, 77)",
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },

  error: {
    color: "red",
    marginTop: 5,
    fontSize: 16,
  },

  pickerContainer: {
    marginTop: 10,
    borderRadius: 10,
    borderColor: "rgb(77, 77, 77)",
    borderWidth: 1,
    overflow: "hidden",
  },

  countryPickerContainer: {
    marginTop: 10,
    width: "100%",
  },

  picker: {
    width: "100%",
    height: 50,
    backgroundColor: "transparent",
  },

  datePickersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  datePickerItem: {
    flex: 1,
    marginHorizontal: 5,
  },

  boton: {
    backgroundColor: "rgb(255, 204, 0)",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: "25%",
    alignSelf: "left",
    marginLeft: 13,
  },
});
