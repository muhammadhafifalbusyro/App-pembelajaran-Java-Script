import React from 'react'
import {View,Text,TouchableNativeFeedback,TouchableOpacity,StyleSheet,ImageBackground,Image,Dimensions,Modal,Alert,ScrollView} from 'react-native'


class Home extends React.Component{
    state={
        button1:true,
        button2:true,
        button3:true,
        button4:true,
        button5:true,
        button6:true,
        button7:true,
        button8:true,
        button9:true,
        tipedata:null,
        variabel:null,
        operator:null,
        popUp:null,
        perulangan:null,
        pengkondisian:null,
        functions:null,
        array:null,
        object:null,
        visibleTipeDataA:false,
        visibleTipeDataB:false,
        visibleVariabelA:false,
        visibleVariabelB:false,
        visibleOperatorA:false,
        visibleOperatorB:false,
        visiblePopUpA:false,
        visiblePopUpB:false,
        visiblePerulanganA:false,
        visiblePerulanganB:false,
        visiblePengkondisianA:false,
        visiblePengkondisianB:false,
        visibleFunctionsA:false,
        visibleFunctionsB:false,
        visibleArrayA:false,
        visibleArrayB:false,
        visibleObjectA:false,
        visibleObjectB:false,
        Splash:true,
        peringatan:null
    }
    componentDidMount(){
        setTimeout(() => {
           this.setState({
               Splash:!this.state.Splash,
            }) 
        }, 5000)
        setTimeout(() => {
            this.setState({
                peringatan:this.peringatan()
            })
        },7000);
    }
    splash(){
        if(this.state.Splash){
            return (
                <View style={{height:'100%',width:'100%',backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
                    <Image
                    source={require('../image/logooo.jpg')}
                    style={{height:'70%',width:'90%'}}/>
                </View>
            )
        }
        else{
            return(
                <View></View>
            )
            
        }
    }
    peringatan(){
        Alert.alert('Berdoalah Sebelum Belajar !!!')
    }
            
    arrowTipeDAta(){
        if(this.state.button1){
            return (
            <Image
            source={require('../image/right-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
        else{
            return ( 
            <Image
            source={require('../image/down-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
    }
    arrowVariabel(){
        if(this.state.button2){
            return (
            <Image
            source={require('../image/right-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
        else{
            return ( 
            <Image
            source={require('../image/down-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
    }
    arrowOperator(){
        if(this.state.button3){
            return (
            <Image
            source={require('../image/right-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
        else{
            return ( 
            <Image
            source={require('../image/down-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
    }
    arrowPopUp(){
        if(this.state.button4){
            return (
            <Image
            source={require('../image/right-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
        else{
            return ( 
            <Image
            source={require('../image/down-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
    }
    arrowPerulangan(){
        if(this.state.button5){
            return (
            <Image
            source={require('../image/right-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
        else{
            return ( 
            <Image
            source={require('../image/down-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
    }
    arrowPengkondisian(){
        if(this.state.button6){
            return (
            <Image
            source={require('../image/right-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
        else{
            return ( 
            <Image
            source={require('../image/down-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
    }
    arrowFunction(){
        if(this.state.button7){
            return (
            <Image
            source={require('../image/right-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
        else{
            return ( 
            <Image
            source={require('../image/down-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
    }
    arrowArray(){
        if(this.state.button8){
            return (
            <Image
            source={require('../image/right-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
        else{
            return ( 
            <Image
            source={require('../image/down-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
    }
    arrowObject(){
        if(this.state.button9){
            return (
            <Image
            source={require('../image/right-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
        else{
            return ( 
            <Image
            source={require('../image/down-arrow.png')}
            style={{height:30,width:30}}/>
            )
        }
    }
    
    showModalA(visible){
        this.setState({visibleTipeDataA:visible})
    }
    showModalB(visible){
        this.setState({visibleTipeDataB:visible})
    }
    showModalC(visible){
        this.setState({visibleVariabelA:visible})
    }
    showModalD(visible){
        this.setState({visibleVariabelB:visible})
    }
    showModalE(visible){
        this.setState({visibleOperatorA:visible})
    }
    showModalF(visible){
        this.setState({visibleOperatorB:visible})
    }
    showModalG(visible){
        this.setState({visiblePopUpA:visible})
    }
    showModalH(visible){
        this.setState({visiblePopUpB:visible})
    }
    showModalI(visible){
        this.setState({visiblePerulanganA:visible})
    }
    showModalJ(visible){
        this.setState({visiblePerulanganB:visible})
    }
    showModalK(visible){
        this.setState({visiblePengkondisianA:visible})
    }
    showModalL(visible){
        this.setState({visiblePengkondisianB:visible})
    }
    showModalM(visible){
        this.setState({visibleFunctionsA:visible})
    }
    showModalN(visible){
        this.setState({visibleFunctionsB:visible})
    }
    showModalO(visible){
        this.setState({visibleArrayA:visible})
    }
    showModalP(visible){
        this.setState({visibleArrayB:visible})
    }
    showModalQ(visible){
        this.setState({visibleObjectA:visible})
    }
    showModalR(visible){
        this.setState({visibleObjectB:visible})
    }
    _klikTipeData(){
        if(this.state.button1){return this.setState({
            button1:!this.state.button1,
            tipedata:this._childTipeData()})}
        else{return this.setState({
            button1:!this.state.button1,
            tipedata:null})}
    }
    _klikVariabel(){
        if(this.state.button2){return this.setState({
            button2:!this.state.button2,
            variabel:this._childVariabel()})}
        else{return this.setState({
            button2:!this.state.button2,
            variabel:null})}
    }
    _klikOperator(){
        if(this.state.button3){return this.setState({
            button3:!this.state.button3,
            operator:this._childOperator()})}
        else{return this.setState({
            button3:!this.state.button3,
            operator:null})}
    }
    _klikPopUp(){
        if(this.state.button4){return this.setState({
            button4:!this.state.button4,
            popUp:this._childPopUp()})}
        else{return this.setState({
            button4:!this.state.button4,
            popUp:null})}
    }
    _klikPerulangan(){
        if(this.state.button5){return this.setState({
            button5:!this.state.button5,
            perulangan:this._childPerulangan()})}
        else{return this.setState({
            button5:!this.state.button5,
            perulangan:null})}
    }
    _klikPengkondisian(){
        if(this.state.button6){return this.setState({
            button6:!this.state.button6,
            pengkondisian:this._childPengkondisian()})}
        else{return this.setState({
            button6:!this.state.button6,
            pengkondisian:null})}
    }
    _klikFunctions(){
        if(this.state.button7){return this.setState({
            button7:!this.state.button7,
            functions:this._childFunctions()})}
        else{return this.setState({
            button7:!this.state.button7,
            functions:null})}
    }
    _klikArray(){
        if(this.state.button8){return this.setState({
            button8:!this.state.button8,
            array:this._childArray()})}
        else{return this.setState({
            button8:!this.state.button8,
            array:null})}
    }
    _klikObject(){
        if(this.state.button9){return this.setState({
            button9:!this.state.button9,
            object:this._childObject()})}
        else{return this.setState({
            button9:!this.state.button9,
            object:null})}
    }
    _childTipeData(){
        return(
            <View style={styles.ChildHeader}>
                <TouchableOpacity onPress={()=>this.showModalA(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Konsep</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.showModalB(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Contoh</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    _childVariabel(){
        return(
            <View style={styles.ChildHeader}>
                <TouchableOpacity onPress={()=>this.showModalC(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Konsep</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.showModalD(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Contoh</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    _childOperator(){
        return(
            <View style={styles.ChildHeader}>
                <TouchableOpacity onPress={()=>this.showModalE(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Konsep</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.showModalF(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Contoh</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    _childPopUp(){
        return(
            <View style={styles.ChildHeader}>
                <TouchableOpacity  onPress={()=>this.showModalG(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Konsep</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.showModalH(true)} >
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Contoh</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    _childPerulangan(){
        return(
            <View style={styles.ChildHeader}>
                <TouchableOpacity onPress={()=>this.showModalI(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Konsep</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.showModalJ(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Contoh</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    _childPengkondisian(){
        return(
            <View style={styles.ChildHeader}>
                <TouchableOpacity onPress={()=>this.showModalK(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Konsep</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.showModalL(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Contoh</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    _childFunctions(){
        return(
            <View style={styles.ChildHeader}>
                <TouchableOpacity onPress={()=>this.showModalM(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Konsep</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.showModalN(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Contoh</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    _childArray(){
        return(
            <View style={styles.ChildHeader}>
                <TouchableOpacity onPress={()=>this.showModalO(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Konsep</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.showModalP(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Contoh</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    _childObject(){
        return(
            <View style={styles.ChildHeader}>
                <TouchableOpacity onPress={()=>this.showModalQ(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Konsep</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.showModalR(true)}>
                    <View style={styles.ChildList}>
                        <Text style={styles.ChildText}>Contoh</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    render(){
        let tipedata=this.state.tipedata
        let variabel=this.state.variabel
        let operator=this.state.operator
        let popUp=this.state.popUp
        let perulangan=this.state.perulangan
        let pengkondisian=this.state.pengkondisian
        let functions=this.state.functions
        let array=this.state.array
        let object=this.state.object

        return(
            <View style={styles.Container}>
                 {this.splash()}
                 {this.state.peringatan}
                <ImageBackground
                source={require('../image/141514.jpg')}
                style={styles.ImageBackground}>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visibleTipeDataA}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalA(!this.state.visibleTipeDataA)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                        <Text style={{color:'yellow',fontSize:20}}>Dalam pemrograman kita membutuhkan kumpulan data, di dalam data berisi nilai-nilai, nilai inilah yang nantinya akan dimasukan kedalam komponen, variabel, ataupun suatu function.{'\n'}{'\n'}Tipe Data sendiri ada 5 jenis diantaranya :{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}1) Tipe Data Number{'\n'}{'\n'}  Tipe Data yang berisi nilai Integer(bilangan bulat), atau float(bilangan pecahan).{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}2)Tipe Data String{'\n'}{'\n'}   Tipe Data yang berisi nilai kata atau kalimat.{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}3)Tipe Data Array{'\n'}{'\n'}     Tipe Data yang memiliki nilai index dan value, index dalam array selalu dimulai dari nol,dan value nya adalah nilai yang kita masukan kedalam array.Penggunaan array sendiri biasanya untuk memasukan data-data yang lebih dari satu data. Lambang array menggunakan kurung siku [ ].{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}4)Tipe Data Object{'\n'}{'\n'}    Tipe Data yang memiliki nilai key dan value, berbeda dengan array, jika array index nya sudah disediakan oleh array itu sendiri, sedangkan pada object indexnya bisa kita buat sendiri yang mana nantinya key itu sama saja dengan index pada array. Kegunaannya pun sama dengan array,untuk memasukan lebih dari satu data. Lambang object menggunakan kurung kurawal {'{ }'}.{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}5) Tipe Data Boolean{'\n'}{'\n'}   Tipe Data Ini yang digunakan untuk merepresentasikan logika true atau false, tipe data ini biasanya digunakan pada statement pengkondisian ,untuk menentukan aksi yang berbeda dan mengatur alur kendali program.{'\n'}{'\n'} </Text>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visibleTipeDataB}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalB(!this.state.visibleTipeDataB)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                      <Image
                                      source={require('../image/1.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/2.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/3.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/4.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/5.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/6.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visibleVariabelA}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalC(!this.state.visibleVariabelA)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                        <Text style={{color:'yellow',fontSize:20}}> Variabel adalah sebuah nama yang mewakili sebuah nilai. Variabel bisa diisi dengan berbagai macam nilai seperti string (teks), number (angka), objek, array, dan sebagainya.{'\n'}{'\n'}    Kita bisa ibaratkan, variabel itu seperti wadah untuk menyimpan sesuatu.{'\n'}{'\n'}    Pada Es5 pendeklarasian variabel menggunakan 'var', sedangkan pada Es6 terdapat penambahan pendeklarasian variabel antara lain 'var', 'let', 'const'{'\n'}{'\n'}    Perbadaan Var, Let dan Const:{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'} 1) Var{'\n'}{'\n'}     var sendiri adalah suatu pendeklarasian variabel dalam Java Script yang bersifat functional scope dimana variabel bisa dipanggil didalam maupun diluar block scope(kurung kurawal).{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'} 2) Let{'\n'}{'\n'}   sedangkan let merupakan pendeklarasian suatu variabel yang dideklarasikan didalam blockscope dan tak dapat dipanggil jika variabel tersebut berada di luar lingkup scope nya.{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'} 3) Const{'\n'}{'\n'}    const sendiri sama hal nya dengan let , dimana pendeklarasian variabel menggunakan const hanya bisa dipanggil dalam lingkup scope nya, namun perbedaannya const ini variabel yang berifat tetap tidak dapat dirubah kecuali dalam kondisi tertentu.{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}     Pendeklarasian variabel ada 3 langkah, diantaranya:{'\n'}{'\n'}     Deklarasi--> mendaftarkan variabel kepada lingkup yang sesuai{'\n'}{'\n'}   Inisialisasi--> menyediakan memori untuk variabel{'\n'}{'\n'}   Assignment--> menetapkan nilai yang spesifik kedalam variabel{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}   Dalam pemberian nama variabel ketentuannya harus diawali dengan huruf tidak boleh angka, lalu boleh dengan diawali dengan underscore  </Text>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visibleVariabelB}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalD(!this.state.visibleVariabelB)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                      <Image
                                      source={require('../image/7.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/8.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/9.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/10.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/11.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/12.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/13.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/13a.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visibleOperatorA}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalE(!this.state.visibleOperatorA)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                        <Text style={{color:'yellow',fontSize:20}}> Operator adalah sebuah simbol- simbol yang digunakan untuk melakukan operasi, dalam berbagai bahasa pemrograman terdapat operator nya masing masing, salah satunya javaScript.{'\n'}{'\n'}  Dalam JavaScript terdapat 7 operator , dimana dalam 7 tersebut dibagi kedalam 3 kelompok , yaitu :{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}  Operator Binary ( operator yang membutuhkan 2 operand){'\n'}{'\n'}-Aritmatika{'\n'}{'\n'}-Penugasan{'\n'}{'\n'}-Perbandingan{'\n'}{'\n'}-Logika{'\n'}{'\n'}-String{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}  Operator Ternary (operator yang membutuhkan 3 operand){'\n'}{'\n'}-Conditional{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}  Operator Unary (operator yang membutuhkan 1 operan){'\n'}{'\n'}-Typeof{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Operator Aritmatika{'\n'}{'\n'} Operator Aritmatika adalah semua jenis operator pada matematika yaitu ( + - * / ) dan terdapat satu lagi operator yaitu --> %( modulus ) . Dalam java script modulus adalah operator yang menghasilkan sisa hasil dari suatu pembagian . Seperti pada pengerjaan soal matematika semua jenis operator Aritmatika ada urutan pengerjaannya, kalau kalian tahu mungkin kalian ingat rumus KUKABATAKU ( kurung, kali, bagi, tambah, kurang).Dimana yang didahulukan yaitu yang kurung terlebih dahulu baru setelahnya kali, bagi , tambah dan kurang{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Operator Penugasan{'\n'}{'\n'} Operator Penugasan adalah operator yang berfungsi untuk memasukan nilai kedalam suatu variabel,antara lain{'\n'}{'\n'} = ( sama dengan){'\n'}{'\n'} += (tambah sama dengan){'\n'}{'\n'} -= (kurang sama dengan){'\n'}{'\n'} *= ( kali sama dengan){'\n'}{'\n'} /= (bagi sama dengan){'\n'}{'\n'} %= (modulus sama dengan){'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Operator Perbandingan{'\n'}{'\n'} Operator Perbandingan adalah operator yang membandingkan 2 operand, antara lain:{'\n'}{'\n'}== ( sama dengan){'\n'}{'\n'}!= ( tidak sama dengan ){'\n'}{'\n'}=== ( strict sama dengan (operator identitas)){'\n'}{'\n'}!== ( strict tidak sama dengan){'\n'}{'\n'}> (lebih besar dari){'\n'}{'\n'}{'< '}(lebih kecil dari){'\n'}{'\n'}>= (lebih besar sama dengan){'\n'}{'\n'}{'<'}= (lebih kecil sama dengan){'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Operator Logika{'\n'}{'\n'}  Operator logika adalah operator yang mengembalikan salah satu dari nilai expression. Baik expression tersebut merupakan nilai boolean atau bukan. Jika expression merupakan nilai boolean maka operator logika akan mengembalikan nilai boolean. Jika tidak maka salah satu dari nilai expression akan dikembalikan.Dalam Operator Logika antara lain:{'\n'}{'\n'}&& --> AND{'\n'}{'\n'}|| --> OR{'\n'}{'\n'}! --> NOT{'\n'}{'\n'}   Operator logika AND dan OR membutuhkan dua expression. Sementara operator logika NOT hanya membutuhkan satu expression.{'\n'}{'\n'} Untuk operator AND, jika expression sebelah kiri setelah dievaluasi menghasilkan nilai false, maka operator AND akan mengembalikan expression pertama. Kebalikannya, jika expression sebelah kiri setelah dievaluasi menghasilkan nilai true, maka operator AND akan mengembalikan expression kedua.{'\n'}{'\n'}    Untuk operator OR, jika expression sebelah kiri setelah dievaluasi menghasilkan nilai true, maka operator OR akan mengembalikan expression pertama. Kebalikannya, jika expression sebelah kiri setelah dievaluasi menghasilkan nilai false, maka operator OR akan mengembalikan expression kedua.{'\n'}{'\n'}   Operator NOT sedikit berbeda dengan operator AND atau OR. Operator NOT hanya membutuhkan satu expression karena tugas dari operator NOT adalah untuk menegasikan hasil evaluasi expression yang diberikan.Jika expression yang diberikan setelah dievaluasi menghasilkan nilai true, maka operator NOT akan mengembalikan false. Kebalikannya, jika expression yang diberikan setelah dievaluasi menghasilkan nilai false, maka operator NOT akan mengembalikan true.{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Operator String{'\n'}{'\n'}    Operator string adalah operator untuk menggabungkan beberapa string , misalnya menggabungkan dua kata atau dua kalimat, dengan penghubung tanda tambah ( + ).{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Operator Type Of (){'\n'}{'\n'}    Operator TypeOf adalah operator untuk mengembalikan jenis tipe data itu sendiri.{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Operator Conditional{'\n'}{'\n'}    Operator yang berfungsi untuk membandingkan nilai benar atau salah{'\n'}{'\n'} (kondisi) ? benar : salah  </Text>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visibleOperatorB}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalF(!this.state.visibleOperatorB)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                    <Image
                                      source={require('../image/14.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/15.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/16.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/17.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/18.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/19.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/20.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/21.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/22.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visiblePopUpA}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalG(!this.state.visiblePopUpA)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                        <Text style={{color:'yellow',fontSize:20}}> Pop up Box adalah jendela yang muncul pada saat tertentu ketika User sedang melakukan interaksi pada suatu tampilan web ataupun pada mobile, jendela tersebut bisa berupa peringatan,sebuah konfirmasi atau semacamnya.Semua perintah atau masukan pada pop up box berbentuk string. Dalam JavaScript ada 3 jenis Pop Up Box, antara lain:{'\n'}{'\n'}- Alert{'\n'}{'\n'}- Prompt{'\n'}{'\n'}- Confirm{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'} Alert adalah pop up box yang fungsinya untuk memberi tahu sebuah peringatan,atau pemberitahuan jika user melakukan suatu aksi pada UI ( user interface )suatu web atau mobile.Cara menggunakan Alert adalah dengan :{'\n'}{'\n'}alert ( masukan ){'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'} Prompt adalah pop up box yang fungsinya untuk memberikan perintah masukan pada user.Cara menggunakan Prompt adalah dengan:{'\n'}{'\n'}prompt ( masukan ){'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}   Confirm adalah pop up box yang berfungsinya untuk memberikan pilihan aksi kepada user.Cara menggunakan Confirm adalah dengan:{'\n'}{'\n'}confirm ( masukan )</Text>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visiblePopUpB}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalH(!this.state.visiblePopUpB)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                    <Image
                                      source={require('../image/23.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/24.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/25.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/26.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/27.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/28.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/29.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/30.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/31.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/32.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visiblePerulanganA}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalI(!this.state.visiblePerulanganA)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                        <Text style={{color:'yellow',fontSize:20}}> Perulangan/ Looping adalah suatu kondisi dimana program dijalankan secara berulang- ulang sampai statemen/ kondisi terpenuhi, atau bahasa lainnya program akan terus berulang sampai program bernilai false barulah program berhenti. Dalam JavaScript membuat Looping ada 3 cara yaitu :{'\n'}{'\n'}- Menggunakan For{'\n'}{'\n'}- Menggunakan While{'\n'}{'\n'}- Menggunakan Do While{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}For{'\n'}{'\n'}  Dalam perulangan menggunakan For , ada 4 syarat yang harus dipenuhi , pertama ada inisialisasi( penentuan nilai awal ), lalu membuat statement ( batas perulangannya ) ,lalu membuat increment/ decrement( operator penambahan /pengurangan dimana operator ini yang berfungsi sebagai perulangannya jika statement  pertama terpenuhi, maka akan dilanjutkan ke statement berikutnya sampai semua statement terpenuhi ),lalu membuat aksi yang ingin di eksekusi. rumus menggunakan For{'\n'}{'\n'}for ( nilai awal ; statement ; increment/decrement ){'{'}{'\n'}aksi{'\n'}{'}'}{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}While{'\n'}{'\n'} Perulangan While adalah sebuah perulangan yang menyatakan kondisi terlebih dahulu, JavaScript akan mengevaluasi kondisi tersebut dan selama kondisi tersebut bernilai true, maka perulangan akan dilanjutkan hingga kondisi bernilai false. Tentu saja sebagian perulangan mempunyai sistem kerja demikian, namun ada perbedaan antara perulangan For dan perulangan While.{'\n'}{'\n'} Jika kita menggunakan perulangan For didalam JavaScript, maka biasanya kita harus membuat pernyataan atau statemen 3 buah. Jika sobat lupa mengenai statemen atau pernyataan didalam perulangan For, baca kembali artikel sebelum ini. Namun dengan menggunakan perulangan While, kita hanya cukup menuliskan sebuah kondisi didalamnya. Rumus menggunakan While{'\n'}{'\n'}while ( kondisi ){'{'}{'\n'}aksi{'\n'}{'}'}{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Do While{'\n'}{'\n'} Perulangan Do While adalah varian yang berasal dari perulangan while. Jika pada perulangan while kita membuat kondisi terlebih dahulu, kemudian JavaScript akan mengevaluasi kondisi tersebut dan menjalankan blok kode selama kondisi tersebut bernilai true. Do While seperti kebalikan dari perulangan while. Perulangan Do While terlebih dahulu menjalankan kode bloknya baru kemudian mengevaluasi kondisi, ketika kondisi bernilai true maka akan kembali melakukan perulangan. Singkatnya, jika kita menggunakan perulangan while kita menetapkan kondisinya didepan. Namun jika menggunakan perulangan do while, kita menentukan kondisinya di belakang.  Rumus menggunakan Do While{'\n'}{'\n'}   do{'{'}{'\n'}aksi{'\n'}{'}'}{'\n'}while ( kondisi )</Text>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visiblePerulanganB}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalJ(!this.state.visiblePerulanganB)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                    <Image
                                      source={require('../image/33.png')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/34.png')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/35.png')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/36.png')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/37.png')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/38.png')}
                                      style={{height:400,width:'100%'}}/>  
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visiblePengkondisianA}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalK(!this.state.visiblePengkondisianA)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                        <Text style={{color:'yellow',fontSize:20}}>Pengkondisian adalah suatu sistem dalam setiap pemrograman dimana code yang ditugaskan itu dikondisikan, maksudnya ketika code bernilai true akan masuk kedalam statement true, sebaliknya jika code bernilai false maka code tersebut akan masuk ke statement false, misalkan pada sebuah meja terdapat satu buah apel, nah disini kita membuat suatu kondisi ,, apa yang terjadi apabila apel itu kita makan dan apa yang terjadi apabila apel tersebut tidak kita makan, seperti itulah gambaran pengkondisian pada setiap pemrograman.{'\n'}{'\n'}Dalam JavaScript ada 3 cara pengkondisian yaitu,{'\n'}{'\n'}- IF ELSE{'\n'}{'\n'}- ELSE IF{'\n'}{'\n'}- SWITCH{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'} Menggunakan IF ELSE{'\n'}{'\n'}- Penggunaan IF ELSE adalah ketika kita mau mengeksekusi code dengan dua kondisi, dimana jika code bernilai true akan masuk ke IF jika code bernilai false maka code akan masuk ke ELSE. Rumus menggunakan IF ELSE{'\n'}{'\n'}if ( kondisi ) {'{'} aksi 1 {'}'}{'\n'}else {'{'} aksi 2 {'}'}{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'} Menggunakan ELSE IF{'\n'}{'\n'}- Penggunaan ELSE If adalah ketika kita mau mengeksekusi code dengan lebih dari dua kondisi, dimana jika code pertama bernilai true akan masuk ke IF jika code , lalu jika code kedua masih bernilai true maka akan masuk ke ELSE IF , kemudian jika kode bernilai false maka code akan masuk ke ELSE. Rumus menggunakan  ELSE IF{'\n'}{'\n'}if ( kondisi ) {'{'} aksi 1 {'}'}{'\n'}else if{'{'} aksi 2 {'}'}{'\n'}else {'{'} aksi 3 {'}'}{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Menggunakan SWITCH{'\n'}{'\n'}   SWITCH digunakan untuk percabangan kode program dimana kondisi yang diperiksa hanya ada 1 namun memiliki banyak opsi. Rumus menggunakan SWITCH{'\n'}{'\n'}switch ( kondisi ){'\n'}{'{'}{'\n'}case hasil_kondisi_1:{'\n'}// kode program jika kondisi sama dengan hasil_kondisi_1{'\n'}break;{'\n'}case hasil_kondisi_2:{'\n'}// kode program jika kondisi sama dengan hasil_kondisi_2{'\n'}break;{'\n'}default:{'\n'}kode program untuk kondisi lainnya{'\n'}break;{'\n'}}</Text>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visiblePengkondisianB}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalL(!this.state.visiblePengkondisianB)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                    <Image
                                      source={require('../image/39.png')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/40.png')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/41.png')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/42.png')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/43.png')}
                                      style={{height:400,width:'100%'}}/>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visibleFunctionsA}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalM(!this.state.visibleFunctionsA)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                        <Text style={{color:'yellow',fontSize:20}}>Function adalah sebuah sub- program / sub routine / bagian kecil suatu program yang dapat dipanggil di bagian lain pada program. Function merupakan struktur dasar pembentuk dari JavaScript. Function disebut juga prosedur ( kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai ).{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Kenapa harus Function? {'\n'}{'\n'}-  Sebab dengan mengunakan Function kita gak perlu menulis kode berulang ulang{'\n'}{'\n'}-    Dengan menggunakan Function kita menyembunyikan kekompleksan program atau dengan kata lain kita pecah program menjadi beberapa bagian{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Kategori Function? {'\n'}{'\n'}Function dibagi kedalam dua kategori yaitu :{'\n'}{'\n'}- Built in Function ( function yang sudah disediakan oleh JavaScript itu sendiri ){'\n'}{'\n'}- User Defined Function ( function yang dibuat sendiri ){'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Built in Function :{'\n'}{'\n'}- Function yang di sediakan oleh JavaScript{'\n'}{'\n'}- Tinggal dipanggil oleh user ,contohnya : alert, prompt ,confirm dan sebagainya {'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}User Defined Function:{'\n'}{'\n'}- Function yang dibuat sendiri oleh user {'\n'}{'\n'}- Menggunakan keyword function {'\n'}{'\n'}- Nama function (optional){'\n'}{'\n'}- Parameter disimpan didalam (), boleh ada parameter atau tidak , dan dipisahkan oleh koma{'\n'}{'\n'}- Function body di bungkus dengan {'{ }'}{'\n'}{'\n'}- Dapat mengembalikan nilai ( return value atau tidak ){'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Dalam membuat User Defined Function ada dua cara, yaitu :{'\n'}{'\n'}- Dengan Deklarasi / function deklarasi{'\n'}{'\n'}- Dengan Expresi / function expression{'\n'}{'\n'} Rumus membuat Function :{'\n'}{'\n'}- Dengan deklarasi----->{'\n'}{'\n'}function NamaFunction ( parameter ){'{'}// apa yang ingin di eksekusi{'}'}{'\n'}{'\n'}- Dengan Expresi ----->{'\n'}{'\n'} Sama cara nya seperti membuat function deklarasi , hanya saja function tersebut dimasukan kedalam variabel{'\n'}{'\n'}let namaVariabel = function NamaFunction ( parameter ){'{'}// apa yang ingin di eksekusi{'}'}{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Parameter dan Argument{'\n'}{'\n'}  Parameter adalah tempat penyimpanan (variabel) di dalam sebuah Function. Sedangkan Argument adalah sebuah nilai yang di assign kan kedalam sebuah parameter.{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Fungsi Rekursif{'\n'}{'\n'}  Fungsi rekursif dalam pemrograman merupakan fungsi yang memanggil dirinya sendiri. Fungsi rekursif sering dibayangkan seperti perulangan. Karena tingkah lakunya yang mengulang-ulang setiap pemanggilan dirinya.{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Kegunaan Function{'\n'}{'\n'}- Blok kode yang dibuat untuk melakukan tugas spesifik{'\n'}{'\n'}- Dapat dipanggil berulang kali{'\n'}{'\n'}- Memudahkan penelusuran{'\n'}{'\n'}
                                        </Text>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visibleFunctionsB}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalN(!this.state.visibleFunctionsB)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                    <Image
                                      source={require('../image/44.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/45.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/46.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/47.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/48.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/49.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visibleArrayA}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalO(!this.state.visibleArrayA)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                        <Text style={{color:'yellow',fontSize:20}}>Array secara terminologi berarti susunan sistematis dari objek- objek yang serupa. Dalam dunia pemrogramman Array itu tipe data yang digunakan untuk mendeskripsikan kumpulan element (nilai atau variabel ) yang tiap tiap elementnya memiliki index{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Manipulasi Array --->{'\n'}{'\n'}- Menampilkan isi Array{'\n'}{'\n'}- Menambah element pada Array{'\n'}{'\n'}- Menghapus element pada Array {'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Mengenal method pada Array{'\n'}{'\n'}  Method adalah kumpulan program yang mempunyai nama. Method merupakan sarana bagi programmer untuk memecah program menjadi bagian-bagian yang kecil agar jadi lebih kompleks sehingga dapat di gunakan berulang-ulang. Method merupakan suatu operasi berupa fungsi-fungsi yang dapat dikerjakan oleh suatu object.Method bisa disebut juga sebagai function didalam object. Berikut adalah method yang sering digunakan :{'\n'}{'\n'} - Length -->  .length    {'\n'}{'\n'}  Length merupakan method pada Array yang berfungsi untuk mengembalikan panjang atau karakter pada suatu variabel dimana variabel itu sendiri diassignkan dengan nilai bertipe data Array{'\n'}{'\n'} - Join --> .join( ) {'\n'}{'\n'}  Join merupakan method pada array yang berfungsi untuk menggabungkan seluruh isi Array dan mengubah isi Array menjadi string{'\n'}{'\n'} - Push --> .push( ){'\n'}{'\n'}  Push merupakan method pada Array yang berfungsi untuk menambah element baru pada Array dibagian akhir{'\n'}{'\n'} - Pop --> .pop( ){'\n'}{'\n'} Pop adalah method pada Array yang berfungsi untuk menghapus element terakhir pada Array{'\n'}{'\n'} - Shift --> .shift( ){'\n'}{'\n'}   Shift merupakan method pada Array yang berfungsi untuk menghapus element  pada Array dibagian awal atau pertama{'\n'}{'\n'} - Unshift --> .unshift( ){'\n'}{'\n'}   Unshift adalah method pada Array yang berfungsi untuk  menambah element pertama pada Array {'\n'}{'\n'} - Slice --> .slice( ) {'\n'}{'\n'}  Slice adalah method pada Array yang berfungsi untuk mengiris Array atau mudahnya kita mengambil Array yang kita inginkan saja{'\n'}{'\n'} - Splice --> .splice( ){'\n'}{'\n'}    Splice adalah method pada Array yang berfungsi untuk menyambung array , menyambung disini maksudnya kita bisa menambah element pada Array di index yang kita inginkan{'\n'}{'\n'}- ForEach --> .forEach( ){'\n'}{'\n'} forEach method hanya menjalankan sebuah fungsi sebanyak jumlah elemen array dengan variabel masing2 elemen itu sendiri. dan method ini tidak memiliki return value{'\n'}{'\n'} - Map --> .map( ){'\n'}{'\n'} Pada dasarnya Map method berfungsi untuk  menghasilkan array baru dari hasil masing- masing elemen array yang diaplikasikan pada fungsi map itu sendiri, tanpa merubah array aslinya. dan method ini punya return value sehingga bisa di terapkan pada sebuah variabel.{'\n'}{'\n'} - Sort --> .sort( ){'\n'}{'\n'}   Sort adalah salah satu method dalam javascript yang berfungsi untuk mengurutkan array berdasarkan abjad atau alfabet {'\n'}{'\n'}- Filter --> .filter ( ) {'\n'}{'\n'} Filter adalah method pada Array yang berfungsi untuk membuat array baru berisi elemen yang lolos pengecekan di dalam fungsi anonim yang dikirim sebagai parameter{'\n'}{'\n'} - Find --> .find( ) {'\n'}{'\n'} Find adalah method pada Array yang berfungsi untuk mencari satu nilai didalam Array </Text>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visibleArrayB}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalP(!this.state.visibleArrayB)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                    <Image
                                      source={require('../image/50.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/51.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/52.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/53.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/54.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/55.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/56.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/57.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/58.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/59.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/60.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/61.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/62.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/63.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/64.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/65.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/66.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/67.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/68.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/69.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/70.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/71.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visibleObjectA}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalQ(!this.state.visibleObjectA)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                        <Text style={{color:'yellow',fontSize:20}}>Object hampir mirip dengan Array dimana jika Array sudah memiliki index secara otomatis, sedangkan di dalam Object index tersebut kita buat sendiri dengan sebuah nama . Pengertian Object itu sendiri ialah kumpulan nilai yang memiliki nama. Object terdiri dari dua bagian yaitu nama object dan properti, nama object bisa dideklarasikan sebagai  variabel ( Object Literal) atau bisa sebagai  function (Function Declaration) sedangkan properti adalah segala sesuatu yang berada didalam sebuah Object,  biasanya disimpan didalam variabel. Jika dalam Array pemanggilan nilai nya kita menggunakan kurung siku dan memasukan index kedalamnya seperti misalnya --> console.log( nama [index] ), sedangkan dalam pemanggilan object dalam pemanggilannya dengan name space ( . ), Rumus -->{'\n'}{'\n'}console.log( namaObject.properti ){'\n'}{'\n'} Dalam membuat Object pada javaScript ada beberapa cara yaitu : {'\n'}{'\n'}- Menggunakan Object Literal{'\n'}{'\n'}- Menggunakan Function Declaration.{'\n'}{'\n'}- Menggunakan Function Constructor{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Menggunakan Object Literal{'\n'}{'\n'} Dalam membuat Object menggunakan Object Literal adalah dengan cara mengassignkan object sebagai value didalam sebuah variabel dimana nantinya didalam object tersebut kita bisa menambahkan key dan value nya.{'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Menggunakan Function Declaration {'\n'}{'\n'} Dimana untuk membuat Object tersebut yaitu dengan membuat function seperti pada umumnya lalu deklarasikan variabel didalam function yang mengassignkan object dan return variabel tersebut {'\n'}{'\n'}--------------------------------------------{'\n'}{'\n'}Menggunakan Function Constructor{'\n'}{'\n'}Dimana Function Constructror hampir mirip dengan Function deklaration perbedaan nya tidak perlu mendeklarasikan variabel dan mereturn nya , dan dalam pemanggilannya menggunakan Keyword new  </Text>
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.visibleObjectB}
                    onRequestClose={()=>null}>
                        <View style={styles.ContainerModal}>
                            <View style={styles.BackgroundModal}>
                                <View style={styles.HeaderModal}>
                                    <TouchableOpacity onPress={()=>this.showModalR(!this.state.visibleObjectB)}>
                                        <Image
                                        source={require('../image/delete.png')}
                                        style={{height:45,width:45}}/>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView>
                                    <View style={{paddingHorizontal:10}}>
                                      <Image
                                      source={require('../image/72.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/73.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/74.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/75.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      <Image
                                      source={require('../image/76.jpg')}
                                      style={{height:400,width:'100%'}}/>
                                      
                                    </View>
                                </ScrollView>
                            </View>
                       </View>
                    </Modal>
                    <View>
                        <View >
                            <Image
                            source={require('../image/bahasa.png')}
                            style={styles.Image}/>
                        </View>
                        <View style={styles.Container2}>
                            <View>
                                <Text style={styles.TextHeader}>Java Script</Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView >
                        <View style={styles.Body}>
                            <TouchableNativeFeedback  onPress={()=>this._klikTipeData()}>
                                <View style={styles.List}>
                                    <Image
                                    source={require('../image/folder.png')}
                                    style={styles.ImageList}/>
                                    <Text style={styles.TextList}>Tipe Data</Text>
                                    {this.arrowTipeDAta()}
                                </View>
                            </TouchableNativeFeedback>
                            {tipedata}
                            <TouchableNativeFeedback onPress={()=>this._klikVariabel()}>
                                <View style={styles.List}>
                                    <Image
                                    source={require('../image/formula.png')}
                                    style={styles.ImageList}/>
                                    <Text style={styles.TextList}>Variabel</Text>
                                    {this.arrowVariabel()}
                                </View>
                            </TouchableNativeFeedback>
                            {variabel}
                            <TouchableNativeFeedback onPress={()=>this._klikOperator()}>
                                <View style={styles.List}>
                                    <Image
                                    source={require('../image/management.png')}
                                    style={styles.ImageList}/>
                                    <Text style={styles.TextList}>Operator</Text>
                                    {this.arrowOperator()}
                                </View>
                            </TouchableNativeFeedback>
                            {operator}
                            <TouchableNativeFeedback onPress={()=>this._klikPopUp()}>
                                <View style={styles.List}>
                                    <Image
                                    source={require('../image/pop-up.png')}
                                    style={styles.ImageList}/>
                                    <Text style={styles.TextList}>Pop Up Box</Text>
                                    {this.arrowPopUp()}
                                </View>
                            </TouchableNativeFeedback>
                            {popUp}
                            <TouchableNativeFeedback onPress={()=>this._klikPerulangan()}>
                                <View style={styles.List}>
                                    <Image
                                    source={require('../image/rotation.png')}
                                    style={styles.ImageList}/>
                                    <Text style={styles.TextList}>Perulangan</Text>
                                    {this.arrowPerulangan()}
                                </View>
                            </TouchableNativeFeedback>
                            {perulangan}
                            <TouchableNativeFeedback onPress={()=>this._klikPengkondisian()}>
                                <View style={styles.List}>
                                    <Image
                                    source={require('../image/binoculars.png')}
                                    style={styles.ImageList}/>
                                    <Text style={styles.TextList}>pengkondisian</Text>
                                    {this.arrowPengkondisian()}
                                </View>
                            </TouchableNativeFeedback>
                            {pengkondisian}
                            <TouchableNativeFeedback onPress={()=>this._klikFunctions()}>
                                <View style={styles.List}>
                                    <Image
                                    source={require('../image/server.png')}
                                    style={styles.ImageList}/>
                                    <Text style={styles.TextList}>Function</Text>
                                    {this.arrowFunction()}
                                </View>
                            </TouchableNativeFeedback>
                            {functions}
                            <TouchableNativeFeedback onPress={()=>this._klikArray()}>
                                <View style={styles.List}>
                                    <Image
                                    source={require('../image/array.png')}
                                    style={styles.ImageList}/>
                                    <Text style={styles.TextList}>Array</Text>
                                    {this.arrowArray()}
                                </View>
                            </TouchableNativeFeedback>
                            {array}
                            <TouchableNativeFeedback onPress={()=>this._klikObject()}>
                                <View style={styles.List}>
                                    <Image
                                    source={require('../image/target.png')}
                                    style={styles.ImageList}/>
                                    <Text style={styles.TextList}>Object</Text>
                                    {this.arrowObject()}
                                </View>
                            </TouchableNativeFeedback>
                            {object}
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    Container:{
        flex:1
    },
    Container2:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'black',
        borderWidth:2,
        borderColor:'aqua',
        height:60,
        alignItems:'center',
        paddingHorizontal:10,
        marginBottom:10
    },
    ImageBackground:{
        height:'100%',
        width:'100%',
    },
    LogoRN:{
        height:50,
        width:50
    },
    Image:{
        height:150,
        width:'100%',
    },
    Menu:{
        height:40,
        width:40
    },
    TextHeader:{
        fontSize:25,
        fontFamily:'serif',
        color:'aqua',
        fontWeight:'bold'
    },
    Body:{
       justifyContent:'center',
       alignItems:'center',

    },
    List:{
        height:60,
        width:300,
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:2,
        borderColor:'aqua',
        backgroundColor:'black',
        borderRadius:5,
        flexDirection:'row',
        marginBottom:10,
        paddingHorizontal:10
    },
    ImageList:{
        height:45,
        width:45,
        
    },
    TextList:{
        fontSize:20,
        fontWeight:'bold',
        color:'aqua',
        fontFamily:'serif'
    },
    TextList2:{
        fontSize:30,
        fontFamily:'serif',
        fontWeight:'bold',
        color:'orange'},
    ChildList:{
        height:40,
        width:100,
        borderWidth:2,
        borderColor:'yellow',
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    ChildText:{
        fontSize:15,
        color:'yellow',
        fontFamily:'serif'
    },
    ChildHeader:{
        height:50,
        width:300,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10
    },
    ContainerModal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(52, 52, 52, 0.8)'
    },
    BackgroundModal:{
        width:'90%',
        height:'90%',
        borderWidth:2,
        borderColor:'aqua',
        backgroundColor:'black',
        borderRadius:10
    },
    HeaderModal:{
        alignItems:'flex-end',
        width:'100%',
        padding:6
    }
})
export default Home