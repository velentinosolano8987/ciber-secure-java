package com.mycompany.cibersecurity.java;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

// Cannot use both enum and class together
public class mySqlConnection {
    private Connection con;
    
    public Connection getConnection() throws SQLException {
        try {
            // The connection method doesn't exist, and parameters should be passed directly
            con = DriverManager.getConnection("jdbc:mysql://localhost/test_db", "root", "");
            // String literals should use double quotes, not single quotes
            System.out.println("Successfully connected to MySQL!");
            
            return con;    
        } catch (SQLException ex) { // Changed to SQLException, removed semicolon
            // System with lowercase 's' is incorrect
            System.out.println("Failed to connect to SQL");
            System.out.println(ex); // Fixed method name printl -> println
        }
        return null;
    }
}
