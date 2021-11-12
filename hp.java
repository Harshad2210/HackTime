import java.util.*;  
class Patient  
{  
  public String name;  
  public String age;  
  public String gender;  
  Patient(String Name, String age, String gender )
  {  
    this.name = name;  
    this.age = age;  
    this.gender = gender;  
  }  
}  
class Hospital  
{  
  private final List<Patient> Patients;  
  Hospital (List<Patient> Patients)  
  {  
    this.Patients = Patients;  
  }  
  public List<Patient> getTotalPatientInStore(){  
    return Patients;  
  }  
}  
public class CompositionExample {  
  public static void main (String[] args)  
  {  
    Patient p1 = new Patient("Harshad","19", "M");  
    Patient p2 = new Patient("Adwait", "20", "M");  
    Patient p3 = new Patient("Jayashree", "22", "F");  
    List<Patient> Patients = new ArrayList<Patient>();  
    Patients.add(p1);  
    Patients.add(p2);  
    Patients.add(p3);  
    Hospital store = new Hospital(Patients);  
    List<Patient> p = store.getTotalPatientInStore();  
    for(Patient pn : p){  
      System.out.println("Name : " + pn.name + " age :" +pn.age + " and "  
          +" gender : " + pn.gender);  
    }  
  }  
}  