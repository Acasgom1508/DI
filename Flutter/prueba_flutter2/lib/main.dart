import 'package:flutter/material.dart';

int dias = 135;

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Fibonacci😢'),
        ),
        body: Center(
          child: Text(
            'Han pasado $dias días',
            style: const TextStyle(fontSize: 24),
          ),
        ),
      ),
    );
  }
}


