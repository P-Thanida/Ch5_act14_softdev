import 'package:flutter/material.dart';

class EditForm extends StatefulWidget {
  final String title; //ชื่อ
  final String lastname;
  final String address;
  final double amount; //เบอร์
  final String password;

  EditForm({
    Key key,
    this.title,
    this.lastname,
    this.address,
    this.amount,
    this.password,
  }) : super(key: key);

  @override
  _EditFormState createState() => _EditFormState();
}

class _EditFormState extends State<EditForm> {
  final formKey = GlobalKey<FormState>();
  double padding = 8;
  // controller
  TextEditingController titleController;
  TextEditingController lastnameController;
  TextEditingController addressController;
  TextEditingController amountController;
  TextEditingController passwordController;
  @override
  void initState() {
    // ignore: todo
    // TODO: implement initState TextEditingController titleController;
    titleController = TextEditingController(text: widget.title);
    lastnameController = TextEditingController(text: widget.lastname);
    addressController = TextEditingController(text: widget.address);
    amountController = TextEditingController(text: widget.amount.toString());
    passwordController = TextEditingController(text: widget.password);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.purple,
          title: Text("Register"),
        ),
        body: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Form(
            key: formKey,
            child: ListView(
              // crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                TextFormField(
                  decoration: new InputDecoration(labelText: "Name"),
                  autofocus: false,
                  controller: titleController,
                  validator: (String str) {
                    //ชื่อรายการเป็นค่าว่าง
                    if (str.isEmpty) {
                      return "name plase";
                    }
                    return null;
                  },
                ),
                TextFormField(
                  decoration: new InputDecoration(labelText: "Last name"),
                  autofocus: false,
                  controller: lastnameController,
                  validator: (String str) {
                    //ชื่อรายการเป็นค่าว่าง
                    if (str.isEmpty) {
                      return "last name plase";
                    }
                    return null;
                  },
                ),
                TextFormField(
                  decoration: new InputDecoration(labelText: "Address"),
                  autofocus: false,
                  controller: addressController,
                  validator: (String str) {
                    //ชื่อรายการเป็นค่าว่าง
                    if (str.isEmpty) {
                      return "address plase";
                    }
                    return null;
                  },
                ),
                TextFormField(
                  decoration: new InputDecoration(labelText: "Phone"),
                  keyboardType: TextInputType.number,
                  controller: amountController,
                  validator: (String str) {
                    if (str.isEmpty) {
                      return "phone";
                    }
                    if (double.parse(str) <= 0) {
                      return "เบอร์โทรศัพท์";
                    }
                    return null;
                  },
                ),
                TextFormField(
                  decoration: new InputDecoration(labelText: "password"),
                  autofocus: false,
                  controller: passwordController,
                  validator: (String str) {
                    //ชื่อรายการเป็นค่าว่าง
                    if (str.isEmpty) {
                      return "Password plase";
                    }
                    return null;
                  },
                ),
                ElevatedButton(
                  child: Text("Submit"),
                  style: ElevatedButton.styleFrom(
                    primary: Colors.deepOrange[300],
                    onSurface: Colors.red,
                  ),
                  onPressed: () {
                    if (formKey.currentState.validate()) {
                      var title = titleController.text.trim();
                      print(title);
                      var lastname = lastnameController.text.trim();
                      print(lastname);
                      var address = addressController.text.trim();
                      print(address);
                      var amount = amountController.text.trim();
                      print(amount.toString());
                      var password = passwordController.text.trim();
                      print(password);
                    }
                  },
                )
              ],
            ),
          ),
        ));
  }
}
