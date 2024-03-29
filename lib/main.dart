// จงสร้างโปรแกรม Flutter
// โดยรับข้อมูลอินพุทเป็น
// “ชื่อ นามสกุล,ที่อยู่, เบอร์โทรศัพท์, ชื่อ user
// (E-mail) และ
// รห้ส password” และให้แสดงข้อความ
// ยินดีต้อนรับเข้าระบบ ตามด้วยชื่อและนามสกุล เช่น “Welcome
// to Animate System, Mr. Michael Anotho”  และทำการเก็บข้อมูลลงบน Local
// Database และแสดงผลข้อมูล

import 'package:flutter/material.dart';
import 'package:flutter_database/providers/transaction_provider.dart';
import 'package:flutter_database/screens/form_screen.dart';
import 'package:flutter_database/screens/home_screen.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import 'models/Transactions.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) {
          return TransactionProvider();
        }),
      ],
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
          visualDensity: VisualDensity.adaptivePlatformDensity,
        ),
        home: MyHomePage(title: '6135512015'),
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        backgroundColor: Colors.deepOrange[300],
        body: TabBarView(
          children: [HomeScreen(), FormScreen()],
        ),
        bottomNavigationBar: TabBar(
          tabs: [
            Tab(
              icon: Icon(Icons.list),
              text: "List",
            ),
            Tab(icon: Icon(Icons.add), text: "Add")
          ],
        ),
      ),
    );
  }
}
