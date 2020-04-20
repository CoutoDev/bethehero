import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat(
    'pt-BR', 
    {
      style: 'currency', 
      currency: 'BRL'
    }
  ).format(incidente.value)}`

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail () {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }
  function sendWhatsApp () {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={ logoImg }/>
        
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041"/>
        </TouchableOpacity>
      </View>     
      
      <View style={styles.incident}>
      <Text style={[styles.incidentProperty, {marginTop: 0}]}>{incident.name} de {incident.city}/{incident.uf}</Text>
          <Text style={styles.incidentValue}>{incident.title}</Text>
          
          <Text style={styles.incidentProperty}>{incident.title}</Text>
          
          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>
            {Intl.NumberFormat(
              'pt-BR', 
              {
                style: 'currency', 
                currency: 'BRL'
              }
            ).format(incidente.value)}
          </Text>
      </View>

      <View style={styles.contactBox}>
        <TouchableOpacity onPress={sendMail}>
          <Text style={styles.actionText}>WhatsApp</Text>
        </TouchableOpacity>
        
        <TouchableOpacity  onPress={sendWhatsApp}>
          <Text style={styles.actionText}>E-mail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
