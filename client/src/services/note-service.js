import http from "../http-common";

class NoteDataService {
    async getAll() {
        return await http.get("/notes");
    }

    get(id) {
        return http.get(`/notes/${id}`);
    }

    create(data) {
        return http.post('/notes', data);
    }

    update(id, data) {
        return http.patch(`/notes/${id}`, data);
    }

    delete(id) {
        return http.delete(`/notes/${id}`);
    }
}

export default new NoteDataService();