import mongoose, { Schema } from 'mongoose'

const raspServiceSchema = new Schema({
  estado: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

raspServiceSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      estado: this.estado,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('RaspService', raspServiceSchema)

export const schema = model.schema
export default model
