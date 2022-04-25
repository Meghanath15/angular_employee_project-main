import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


import { EmployeeType } from "./type/employee.type";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root',
})

export class MainEmployeeService{
    private readonly baseUrl: string = environment.apiUrl;
    // private employees: EmployeeType[]=[
    //     {"id":1,"username":"ebahringer","name":"Braulio Luettgen","email":"kaela.turner@example.net","gender":"Female","designation":"Mean Stack Developer","phone_number":"781.322.7616","complete_address":"298 Edythe Harbors Suite 697\nLake Mathiasburgh, MN 28564-6386"},
    //     {"id":2,"username":"moore.samanta","name":"Christian Kessler","email":"summer.koepp@example.com","gender":"Male","designation":"Freelancer","phone_number":"509-549-9565","complete_address":"8947 Howell Mountains\nSouth Kavon, VT 89670-8443"},
    //     {"id":3,"username":"ewell.moen","name":"Prof. Jacey Volkman DVM","email":"kreiger.merlin@example.net","gender":"Male","designation":"SEO","phone_number":"605-753-9834","complete_address":"9034 Gulgowski Track\nKozeyfort, KS 56273"},
    //     {"id":4,"username":"alayna.dooley","name":"Jane Tremblay DVM","email":"alta.white@example.org","gender":"Male","designation":"SEO","phone_number":"+1-267-764-7713","complete_address":"7397 Ibrahim Vista Suite 669\nDibbertstad, CT 97473"},
    //     {"id":5,"username":"enader","name":"Dr. Noah O'Conner DVM","email":"vmorissette@example.org","gender":"Female","designation":"SEO","phone_number":"+14588521197","complete_address":"306 Borer Isle Apt. 009\nKrisview, MA 89790-8565"},
    //     {"id":6,"username":"qrippin","name":"Dr. Giovanna Jerde","email":"zoie68@example.org","gender":"Female","designation":"CTO","phone_number":"1-469-515-7308","complete_address":"8102 Helen Meadow Apt. 802\nSouth Henry, AK 11483-6250"},
    //     {"id":7,"username":"ebradtke","name":"Cecil Kris","email":"collier.samanta@example.net","gender":"Male","designation":"CEO","phone_number":"1-440-857-4702","complete_address":"8151 Shannon Stream\nEast Harmonchester, WI 79044"},
    //     {"id":8,"username":"rhyatt","name":"Jacques Flatley","email":"brooks.corwin@example.net","gender":"Female","designation":"Freelancer","phone_number":"+1 (863) 946-2072","complete_address":"22227 Murazik Fort Suite 293\nRosariobury, MS 82445-9292"},
    //     {"id":9,"username":"dewitt.walker","name":"Prof. Mikel Marvin","email":"amie.hettinger@example.com","gender":"Male","designation":"Full Stack Developer","phone_number":"251.728.3907","complete_address":"7416 Solon Center\nWhitetown, GA 26640-5188"},
    //     {"id":10,"username":"hayes.anahi","name":"Dr. Pattie Denesik","email":"hokuneva@example.com","gender":"Male","designation":"Full Stack Developer","phone_number":"1-650-931-7426","complete_address":"84480 Wiley Harbor\nZoeberg, ID 95980-1064"}   
    // ]
    
    constructor(private http: HttpClient){}

    public fetchAll(): Observable<EmployeeType[]>{
        const observable=this.http.get<EmployeeType[]>(`${this.baseUrl}/employees`);
        return observable;
    }

    public addEmployees(employee: EmployeeType): Observable<EmployeeType>{
        return this.http.post<EmployeeType>(`${this.baseUrl}/employees`, employee);  
      }

    public removeEmployee(id:number): Observable<EmployeeType>{
        return this.http.delete<EmployeeType>(`${this.baseUrl}/employees/${id}`);
    }

    public getEmployeeDetailsById(id: number): Observable<EmployeeType> {
        return this.http.get<EmployeeType>(`${this.baseUrl}/employees/${id}`)

      }

      public editEmp(id: number, data: EmployeeType): Observable<EmployeeType> {
        return this.http.put<EmployeeType>(`${this.baseUrl}/employees/${id}`, data);
      }
}