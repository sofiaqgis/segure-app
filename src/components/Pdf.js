import * as React from 'react';
import Voucher from './Voucher';


import {
    Document,
    Page,
    View,
    Text,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#d11fb6",
  
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, 
      height: window.innerHeight,
    },
  });
  

  function VoucherPDF() {

    return (
        <PDFViewer style={styles.viewer}>
  
      <Document>
    
        <Page size="A4" style={styles.page}>
          
          <View >
           <Text>
            <Voucher/>
           </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
    );
  }
  export default VoucherPDF;