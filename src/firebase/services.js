import {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    orderBy,
    query,
    where,
    serverTimestamp
} from 'firebase/firestore';
import { db } from './config';

// Donations Service
export const donationsService = {
    // Add a new donation
    async addDonation(donationData) {
        try {
            const docRef = await addDoc(collection(db, 'donations'), {
                ...donationData,
                createdAt: serverTimestamp(),
                status: 'pending'
            });
            return docRef.id;
        } catch (error) {
            console.error('Error adding donation:', error);
            throw error;
        }
    },

    // Get all donations
    async getDonations() {
        try {
            const q = query(collection(db, 'donations'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error('Error getting donations:', error);
            throw error;
        }
    },

    // Get donations by user
    async getDonationsByUser(userId) {
        try {
            const q = query(
                collection(db, 'donations'),
                where('userId', '==', userId),
                orderBy('createdAt', 'desc')
            );
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error('Error getting user donations:', error);
            throw error;
        }
    }
};

// Members Service
export const membersService = {
    // Add a new member profile
    async addMember(memberData) {
        try {
            const docRef = await addDoc(collection(db, 'members'), {
                ...memberData,
                joinedAt: serverTimestamp(),
                contributions: 0,
                points: 0
            });
            return docRef.id;
        } catch (error) {
            console.error('Error adding member:', error);
            throw error;
        }
    },

    // Get all members
    async getMembers() {
        try {
            const q = query(collection(db, 'members'), orderBy('points', 'desc'));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error('Error getting members:', error);
            throw error;
        }
    },

    // Update member profile
    async updateMember(memberId, updateData) {
        try {
            const memberRef = doc(db, 'members', memberId);
            await updateDoc(memberRef, updateData);
        } catch (error) {
            console.error('Error updating member:', error);
            throw error;
        }
    }
};

// Contributions Service
export const contributionsService = {
    // Add a new contribution
    async addContribution(contributionData) {
        try {
            const docRef = await addDoc(collection(db, 'contributions'), {
                ...contributionData,
                createdAt: serverTimestamp(),
                status: 'active'
            });
            return docRef.id;
        } catch (error) {
            console.error('Error adding contribution:', error);
            throw error;
        }
    },

    // Get all contributions
    async getContributions() {
        try {
            const q = query(collection(db, 'contributions'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error('Error getting contributions:', error);
            throw error;
        }
    },

    // Get contributions by user
    async getContributionsByUser(userId) {
        try {
            const q = query(
                collection(db, 'contributions'),
                where('userId', '==', userId),
                orderBy('createdAt', 'desc')
            );
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error('Error getting user contributions:', error);
            throw error;
        }
    }
};

// Projects Service for Discover page
export const projectsService = {
    // Add a new project
    async addProject(projectData) {
        try {
            const docRef = await addDoc(collection(db, 'projects'), {
                ...projectData,
                createdAt: serverTimestamp(),
                status: 'active',
                supporters: 0
            });
            return docRef.id;
        } catch (error) {
            console.error('Error adding project:', error);
            throw error;
        }
    },

    // Get all projects
    async getProjects() {
        try {
            const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error('Error getting projects:', error);
            throw error;
        }
    },

    // Update project
    async updateProject(projectId, updateData) {
        try {
            const projectRef = doc(db, 'projects', projectId);
            await updateDoc(projectRef, updateData);
        } catch (error) {
            console.error('Error updating project:', error);
            throw error;
        }
    }
}; 