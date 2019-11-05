import * as admin from "firebase-admin"
import * as functions from "firebase-functions"

// Initialize firebase admin sdk
admin.initializeApp(functions.config().firebase)
export const db = admin.database()
